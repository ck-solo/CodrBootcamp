import Profile from "./Profile";

function Content({ user }) {
  console.log("Content Render");

  return (
    <div>
      <Profile user={user} />
    </div>
  );
}

export default Content;
