function ProfileCard({user}) {
  return (
    
    <div className="profile-card">
      <h2>Profile 1</h2>
      <div className="container">

      <h3>Profile Card</h3>
      <p>Name : {user.name}</p>
      <p>Gmail : {user.email}</p>
      <p>Role : {user.role}</p>

      <button>Click me</button>
      </div>
    </div>
  );
}

export default ProfileCard;
