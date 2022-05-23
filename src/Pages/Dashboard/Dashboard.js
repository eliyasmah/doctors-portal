import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashbord-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h1 className="text-2xl font-bold text-purple-500 my-4">
          Welcome to your Dashboard
        </h1>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashbord-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Review</Link>
          </li>
          <li>
            <Link to="/dashboard/history">My History</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
