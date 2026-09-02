const bcrypt = require("bcryptjs");
const { json, preflight, usersStore, signUserToken, safeUser } = require("./_utils");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return preflight();
  if (event.httpMethod !== "POST") return json(405, { error: "Method not allowed" });

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch (e) { return json(400, { error: "Invalid request body" }); }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim().toLowerCase();
  const password = body.password || "";

  if (!name || !email || password.length < 6) {
    return json(400, { error: "Please provide a name, a valid email, and a password of at least 6 characters." });
  }

  const store = usersStore();
  const existing = await store.get(email, { type: "json" });
  if (existing) {
    return json(409, { error: "This email is already registered. Try logging in instead." });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const joined = new Date().toISOString();
  const user = { name, phone, email, passwordHash, joined };

  await store.setJSON(email, user);

  const token = signUserToken(email);
  return json(200, { token, user: safeUser(user) });
};
