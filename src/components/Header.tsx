export default function Header() {
  return (
    <header className="p-4 bg-black text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Xostream</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <a href="/profile" className="hover:underline">Profile</a> {/* ✅ New */}
        <a href="/chat" className="hover:underline">Chat</a>       {/* ✅ New */}
      </nav>
    </header>
  );
}
