 import Dashboard from "./Components/Dashboard";

function App() {
  const user = {
    name: "Lucy",
    email: "lucy@gmail.com",
    role: "Developer",
  };

  return (
    <div>
      <Dashboard user={user} />
    </div>
  );
}

export default App;
