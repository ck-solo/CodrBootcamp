import Content from "./Content";

function Sidebar({ user }) {
  console.log("Sidebar Render");

  return (
    <div>
      <Content user={user} />
    </div>
  );
}

export default Sidebar;
