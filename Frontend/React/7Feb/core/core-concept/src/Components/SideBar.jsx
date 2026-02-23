import ProfileCard from './ProfileCard'
function Sidebar({user}) {
  return (
    <div className="sidebar">
      <h3>Card</h3>
      <ProfileCard user={user} />
    </div>
  );
}

export default Sidebar;
