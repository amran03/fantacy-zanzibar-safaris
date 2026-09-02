const { json, preflight, usersStore, requireUser, safeUser } = require("./_utils");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return preflight();

  const auth = requireUser(event);
  if (!auth) return json(401, { error: "Please log in to continue." });

  const store = usersStore();

  if (event.httpMethod === "GET") {
    const user = await store.get(auth.email, { type: "json" });
    if (!user) return json(404, { error: "Account not found." });
    return json(200, { user: safeUser(user) });
  }

  if (event.httpMethod === "PUT") {
    let body;
    try { body = JSON.parse(event.body || "{}"); }
    catch (e) { return json(400, { error: "Invalid request body" }); }

    const user = await store.get(auth.email, { type: "json" });
    if (!user) return json(404, { error: "Account not found." });

    const name = (body.name || "").trim();
    if (!name) return json(400, { error: "Name cannot be empty." });

    user.name = name;
    user.phone = (body.phone || "").trim();
    await store.setJSON(auth.email, user);
    return json(200, { user: safeUser(user) });
  }

  return json(405, { error: "Method not allowed" });
};
