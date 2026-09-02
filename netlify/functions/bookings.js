const { json, preflight, bookingsStore, requireUser } = require("./_utils");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return preflight();

  const auth = requireUser(event);
  if (!auth) return json(401, { error: "Please log in to continue." });

  const store = bookingsStore();

  if (event.httpMethod === "GET") {
    const { blobs } = await store.list();
    const bookings = [];
    for (const b of blobs) {
      const record = await store.get(b.key, { type: "json" });
      if (record && record.email === auth.email) bookings.push(record);
    }
    bookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return json(200, { bookings });
  }

  if (event.httpMethod === "POST") {
    let body;
    try { body = JSON.parse(event.body || "{}"); }
    catch (e) { return json(400, { error: "Invalid request body" }); }

    const { packageId, packageName, date, travelers, total } = body;
    if (!packageId || !packageName || !date || !travelers || !total) {
      return json(400, { error: "Missing booking details." });
    }

    const booking = {
      id: "BK" + Date.now() + Math.floor(Math.random() * 1000),
      email: auth.email,
      packageId, packageName, date,
      travelers: parseInt(travelers),
      total: parseFloat(total),
      paid: true,
      progressStep: 1,
      createdAt: new Date().toISOString()
    };

    await store.setJSON(booking.id, booking);
    return json(200, { booking });
  }

  return json(405, { error: "Method not allowed" });
};
