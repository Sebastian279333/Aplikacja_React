import React, { useState, useEffect } from "react";
function Dashboard() {
  const [dashboardTheme, setDashboardTheme] = useState("light");

  useEffect(() => {
    console.log(dashboardTheme);
  }, [dashboardTheme]);

  const dashboardStyle = {
    backgroundColor: dashboardTheme === "light" ? "#fff" : "#000",
    color: dashboardTheme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    padding: "2rem",
  };

  const toggleDashboardTheme = () => {
    setDashboardTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <main style={dashboardStyle}>
      <h1>Dashboard</h1>
      <span>{dashboardTheme}</span>
      <button onClick={toggleDashboardTheme}>Zmień motyw Dashboard</button>
    </main>
  );
}

export default Dashboard;
