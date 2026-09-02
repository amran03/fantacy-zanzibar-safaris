const { json, preflight, activityBookingsStore, requireUser } = require("./_utils");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return preflight();

  const auth = requireUser(event);
  if (!auth) return json(401, { error: "Please log in to continue." });

  const store = activityBookingsStore();

  if (event.httpMethod === "GET") {
    const { blobs } = await store.list();
    const items = [];
    for (const b of blobs) {
      const record = await store.get(b.key, { type: "json" });
      if (record && record.email === auth.email) items.push(record);
    }
    items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return json(200, { activityBookings: items });
  }

  if (event.httpMethod === "POST") {
    let body;
    try { body = JSON.parse(event.body || "{}"); }
    catch (e) { return json(400, { error: "Invalid request body" }); }

    const { activityId, activityName, date, participants, total } = body;
    if (!activityId || !activityName || !date || !participants || !total) {
      return json(400, { error: "Missing activity booking details." });
    }

    const record = {
      id: "AB" + Date.now() + Math.floor(Math.random() * 1000),
      email: auth.email,
      activityId, activityName, date,
      participants: parseInt(participants),
      total: parseFloat(total),
      createdAt: new Date().toISOString()
    };

    await store.setJSON(record.id, record);
    return json(200, { activityBooking: record });
  }

  return json(405, { error: "Method not allowed" });
};
