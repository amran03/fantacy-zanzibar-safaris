const { json, preflight, bookingsStore, requireAdmin } = require("./_utils");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return preflight();

  const admin = requireAdmin(event);
  if (!admin) return json(401, { error: "Admin login required." });

  const store = bookingsStore();

  let body;
  try { body = JSON.parse(event.body || "{}"); }
  catch (e) { return json(400, { error: "Invalid request body" }); }

  const { id } = body;
  if (!id) return json(400, { error: "Booking id is required." });

  if (event.httpMethod === "PUT") {
    const record = await store.get(id, { type: "json" });
    if (!record) return json(404, { error: "Booking not found." });
    const step = parseInt(body.progressStep);
    if (isNaN(step) || step < 0 || step > 4) return json(400, { error: "Invalid progress step." });
    record.progressStep = step;
    await store.setJSON(id, record);
    return json(200, { booking: record });
  }

  if (event.httpMethod === "DELETE") {
    await store.delete(id);
    return json(200, { deleted: true });
  }

  return json(405, { error: "Method not allowed" });
};
