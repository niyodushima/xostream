export default function ProfilePage() {
  const user = {
    name: "Amina",
    age: 28,
    location: "Kigali, Rwanda",
    bio: "Lover of sunsets, deep conversations, and good coffee.",
    interests: ["Travel", "Music", "Fitness", "Tech"],
    photo: "/profile.jpg", // Add this image to public folder
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <img src={user.photo} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
      <h2 className="text-2xl font-bold text-center">{user.name}, {user.age}</h2>
      <p className="text-center text-gray-600">{user.location}</p>
      <p className="mt-4 text-gray-700">{user.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {user.interests.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">{tag}</span>
        ))}
      </div>
      <button className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700">Edit Profile</button>
    </main>
  );
}

