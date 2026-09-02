const { json, preflight, usersStore, bookingsStore, requireAdmin, safeUser } = require("./_utils");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return preflight();
  if (event.httpMethod !== "GET") return json(405, { error: "Method not allowed" });

  const admin = requireAdmin(event);
  if (!admin) return json(401, { error: "Admin login required." });

  const uStore = usersStore();
  const bStore = bookingsStore();

  const { blobs: userBlobs } = await uStore.list();
  const users = [];
  for (const b of userBlobs) {
    const record = await uStore.get(b.key, { type: "json" });
    if (record) users.push(safeUser(record));
  }

  const { blobs: bookingBlobs } = await bStore.list();
  const bookings = [];
  for (const b of bookingBlobs) {
    const record = await bStore.get(b.key, { type: "json" });
    if (record) bookings.push(record);
  }

  users.sort((a, b) => new Date(b.joined || 0) - new Date(a.joined || 0));
  bookings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return json(200, { users, bookings });
};
