const { json, preflight, signAdminToken } = require("./_utils");

/*
  Admin credentials live in Netlify environment variables — never in the
  frontend code. Set ADMIN_EMAIL and ADMIN_PASSWORD in:
  Netlify dashboard → Site configuration → Environment variables.
*/
exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return preflight();
  if (event.httpMethod !== "POST") return json(405, { error: "Method not allowed" });

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch (e) { return json(400, { error: "Invalid request body" }); }

  const email = (body.email || "").trim().toLowerCase();
  const password = body.password || "";

  const adminEmail = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || "";

  if (!adminEmail || !adminPassword) {
    return json(500, { error: "Admin login is not configured yet. Set ADMIN_EMAIL and ADMIN_PASSWORD in Netlify environment variables." });
  }

  if (email !== adminEmail || password !== adminPassword) {
    return json(401, { error: "Incorrect admin email or password." });
  }

  const token = signAdminToken();
  return json(200, { token });
};
