function ProfileCard({ user }) {
  console.log("ProfileCard Render");

  return (
    <div className="profile-card">
      <h3>Profile Card</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <button>Click me</button>
    </div>
  );
}

export default ProfileCard;
