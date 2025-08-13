export default function ChatPage() {
  const messages = [
    { from: "Amina", text: "Hey there 👋" },
    { from: "You", text: "Hi! How’s your day?" },
  ];

  return (
    <main className="grid grid-cols-1 md:grid-cols-3 h-screen">
      <aside className="bg-gray-100 p-4 border-r md:col-span-1">
        <h3 className="font-bold mb-2">Chats</h3>
        <ul>
          <li className="p-2 bg-white rounded mb-2">Amina</li>
          <li className="p-2 bg-white rounded mb-2">John</li>
        </ul>
      </aside>
      <section className="flex flex-col justify-between p-4 md:col-span-2">
        <div className="flex-1 overflow-y-auto">
          {messages.map((msg, i) => (
            <div key={i} className={`mb-2 ${msg.from === "You" ? "text-right" : "text-left"}`}>
              <span className="inline-block px-4 py-2 bg-red-100 rounded">{msg.text}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <input type="text" placeholder="Type a message..." className="flex-1 border rounded px-4 py-2" />
          <button className="bg-red-600 text-white px-4 py-2 rounded">Send</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">📹 Call</button>
        </div>
      </section>
    </main>
  );
}

