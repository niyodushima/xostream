export default function HowItWorks() {
  const steps = [
    { emoji: "💘", title: "Match", desc: "Smart algorithm finds your perfect match." },
    { emoji: "💬", title: "Chat", desc: "Start chatting instantly with live messages." },
    { emoji: "📹", title: "Video Call", desc: "Connect face-to-face in real time." },
    { emoji: "💖", title: "Connect", desc: "Build meaningful relationships." },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-10 bg-white">
      {steps.map((step, i) => (
        <div key={i} className="text-center p-6 shadow rounded">
          <div className="text-3xl">{step.emoji}</div>
          <h3 className="font-bold text-xl mt-2">{step.title}</h3>
          <p className="text-gray-600 mt-2">{step.desc}</p>
        </div>
      ))}
    </section>
  );
}
