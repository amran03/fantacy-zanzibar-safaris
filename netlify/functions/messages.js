const { json, preflight, requireUser, messagesStore } = require("./_utils");

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") return preflight();

  const auth = requireUser(event);
  if (!auth) return json(401, { error: "Unauthorized" });

  const store = messagesStore();
  const userKey = `thread_${auth.email.replace(/[^a-zA-Z0-9]/g, "_")}`;

  if (event.httpMethod === "GET") {
    const thread = (await store.get(userKey, { type: "json" })) || { email: auth.email, messages: [] };
    return json(200, { thread });
  }

  if (event.httpMethod === "POST") {
    try {
      const { text } = JSON.parse(event.body || "{}");
      if (!text || !text.trim()) return json(400, { error: "Message text is required" });

      const thread = (await store.get(userKey, { type: "json" })) || { email: auth.email, messages: [] };
      thread.messages.push({
        sender: "user",
        text: text.trim(),
        timestamp: new Date().toISOString()
      });
      thread.lastUpdated = new Date().toISOString();
      thread.email = auth.email;

      await store.setJSON(userKey, thread);
      return json(200, { message: "Sent", thread });
    } catch (err) {
      return json(500, { error: "Failed to send message" });
    }
  }

  return json(405, { error: "Method not allowed" });
};