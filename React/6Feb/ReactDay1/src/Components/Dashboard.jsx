import Sidebar from "./Sidebar";

function Dashboard({ user }) {
  console.log("Dashboard Render");

  return (
    <div>
      <Sidebar user={user} />
    </div>
  );
}

export default Dashboard;
