/* =========================================================
   Shared helpers used by every Netlify Function in this project.
   Not a function itself — required by the others via require('./_utils').
   ========================================================= */
const jwt = require("jsonwebtoken");
const { getStore } = require("@netlify/blobs");

const JWT_SECRET = process.env.JWT_SECRET || "dev-only-insecure-secret-change-me";

/* ---------- standard JSON response with CORS ---------- */
const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
};

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    body: JSON.stringify(body)
  };
}

function preflight() {
  return { statusCode: 204, headers: CORS_HEADERS, body: "" };
}

/* ---------- blob stores ---------- */
function getUsersStoreOptions() {
  const opts = { name: "fzs-users" };
  if (process.env.NETLIFY_SITE_ID && process.env.NETLIFY_ACCESS_TOKEN) {
    opts.siteID = process.env.NETLIFY_SITE_ID;
    opts.token = process.env.NETLIFY_ACCESS_TOKEN;
  }
  return opts;
}

function usersStore() { return getStore(getUsersStoreOptions()); }
function bookingsStore() { return getStore({ name: "fzs-bookings", siteID: process.env.NETLIFY_SITE_ID, token: process.env.NETLIFY_ACCESS_TOKEN }); }
function activityBookingsStore() { return getStore({ name: "fzs-activity-bookings", siteID: process.env.NETLIFY_SITE_ID, token: process.env.NETLIFY_ACCESS_TOKEN }); }

/* ---------- auth helpers ---------- */
function signUserToken(email) {
  return jwt.sign({ email, role: "user" }, JWT_SECRET, { expiresIn: "30d" });
}
function signAdminToken() {
  return jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "12h" });
}

function getBearerToken(event) {
  const header = event.headers.authorization || event.headers.Authorization || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : null;
}

/** Returns the decoded token payload for a logged-in user, or null. */
function requireUser(event) {
  const token = getBearerToken(event);
  if (!token) return null;
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (payload.role !== "user") return null;
    return payload;
  } catch (e) {
    return null;
  }
}

/** Returns the decoded token payload for a logged-in admin, or null. */
function requireAdmin(event) {
  const token = getBearerToken(event);
  if (!token) return null;
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    if (payload.role !== "admin") return null;
    return payload;
  } catch (e) {
    return null;
  }
}

function safeUser(user) {
  if (!user) return null;
  const { passwordHash, ...rest } = user;
  return rest;
}

module.exports = {
  json, preflight, CORS_HEADERS,
  usersStore, bookingsStore, activityBookingsStore,
  signUserToken, signAdminToken,
  requireUser, requireAdmin, safeUser
};
