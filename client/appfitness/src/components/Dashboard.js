import React from 'react';
import FoodLog from './FoodLogs';
import GoalSetting from './GoalSetting';
import WorkoutLog from './WorkoutLog';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="dashboard-section">
        <h3>Goal Setting</h3>
        <GoalSetting />
      </div>

      <div className="scrollable-section">
        <div className="dashboard-section">
          <h3>Workout Logs</h3>
          <WorkoutLog />
        </div>

        <div className="dashboard-section">
          <h3>Food Logs</h3>
          <FoodLog />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
