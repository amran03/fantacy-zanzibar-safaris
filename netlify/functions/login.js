const bcrypt = require("bcryptjs");
const { json, preflight, usersStore, signUserToken, safeUser } = require("./_utils");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return preflight();
  if (event.httpMethod !== "POST") return json(405, { error: "Method not allowed" });

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch (e) { return json(400, { error: "Invalid request body" }); }

  const email = (body.email || "").trim().toLowerCase();
  const password = body.password || "";

  if (!email || !password) {
    return json(400, { error: "Please enter your email and password." });
  }

  const store = usersStore();
  const user = await store.get(email, { type: "json" });
  if (!user) {
    return json(401, { error: "Incorrect email or password." });
  }

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) {
    return json(401, { error: "Incorrect email or password." });
  }

  const token = signUserToken(email);
  return json(200, { token, user: safeUser(user) });
};
