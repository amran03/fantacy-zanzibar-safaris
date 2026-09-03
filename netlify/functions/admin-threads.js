const { json, preflight, requireAdmin, messagesStore, usersStore } = require("./_utils");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return preflight();

  const auth = requireAdmin(event);
  if (!auth) return json(403, { error: "Admin access required" });

  const store = messagesStore();

  if (event.httpMethod === "GET") {
    try {
      const { blobs } = await store.list();
      const threads = [];
      const userStoreObj = usersStore();

      for (const blob of blobs) {
        if (blob.key.startsWith("thread_")) {
          const threadData = await store.get(blob.key, { type: "json" });
          if (threadData) {
            const userData = await userStoreObj.get(threadData.email, { type: "json" });
            threadData.userInfo = userData ? {
              name: userData.name,
              phone: userData.phone,
              nationality: userData.nationality,
              flightDetails: userData.flightDetails || {},
              companions: userData.companions || []
            } : {};
            threads.push(threadData);
          }
        }
      }
      return json(200, { threads });
    } catch (err) {
      return json(500, { error: "Failed to fetch chat threads" });
    }
  }

  if (event.httpMethod === "POST") {
    try {
      const { userEmail, text } = JSON.parse(event.body || "{}");
      if (!userEmail || !text) return json(400, { error: "userEmail and text are required" });

      const userKey = `thread_${userEmail.replace(/[^a-zA-Z0-9]/g, "_")}`;
      const thread = (await store.get(userKey, { type: "json" })) || { email: userEmail, messages: [] };

      thread.messages.push({
        sender: "admin",
        text: text.trim(),
        timestamp: new Date().toISOString()
      });
      thread.lastUpdated = new Date().toISOString();

      await store.setJSON(userKey, thread);
      return json(200, { message: "Reply sent", thread });
    } catch (err) {
      return json(500, { error: "Failed to send reply" });
    }
  }

  return json(405, { error: "Method not allowed" });
};