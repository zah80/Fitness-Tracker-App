import React from 'react';
import FoodLog from './FoodLogs';
import GoalSetting from './GoalSetting';
import WorkoutLog from './WorkoutLog';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Your Dashboard</h2>
      <div className="cards-container">
        <FoodLog />
        <GoalSetting />
        <WorkoutLog />
      </div>
    </div>
  );
}

export default Home;
