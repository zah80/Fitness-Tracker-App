import React, { useState } from 'react';
import './GoalSetting.css';

const SetGoalsPage = () => {
  const [goals, setGoals] = useState([
    {
      goal_id: 1,
      goal_type: 'Distance jumping',
      target_value: 1000,
      start_date: '2024-01-01',
      end_date: '2024-12-31',
      image: 'data:image/jpeg;base64,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',
    },
    {
      goal_id: 2,
      goal_type: 'Distance running',
      target_value: 500,
      start_date: '2024-01-01',
      end_date: '2024-12-31',
      image: 'data:image/jpeg;base64,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',
    },
  ]);

  const [newGoal, setNewGoal] = useState({
    goal_id: null,
    goal_type: '',
    target_value: '',
    start_date: '',
    end_date: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewGoal((prevGoal) => ({
      ...prevGoal,
      [name]: value,
    }));
  };

  const handleAddGoal = () => {
    if (
      newGoal.goal_type.trim() !== '' &&
      newGoal.target_value !== '' &&
      newGoal.start_date !== '' &&
      newGoal.end_date !== '' &&
      newGoal.image !== ''
    ) {
      if (newGoal.goal_id) {
        // Update existing goal
        const updatedGoals = goals.map((goal) =>
          goal.goal_id === newGoal.goal_id ? { ...newGoal } : goal
        );
        setGoals(updatedGoals);
      } else {
        // Add new goal
        const nextId = goals.length > 0 ? goals[goals.length - 1].goal_id + 1 : 1;
        const updatedGoals = [
          ...goals,
          { ...newGoal, goal_id: nextId, image: 'https://via.placeholder.com/150' }, // Example placeholder image URL
        ];
        setGoals(updatedGoals);
      }
      setNewGoal({
        goal_id: null,
        goal_type: '',
        target_value: '',
        start_date: '',
        end_date: '',
        image: '',
      });
    }
  };

  const handleEditGoal = (goal) => {
    setNewGoal({ ...goal });
  };

  const handleDeleteGoal = (goal_id) => {
    const updatedGoals = goals.filter((goal) => goal.goal_id !== goal_id);
    setGoals(updatedGoals);
  };

  return (
    <div className="set-goals-page">
      <h1>Set Goals</h1>
      <div className="goal-list">
        {goals.map((goal) => (
          <div key={goal.goal_id} className="goal-card">
            <div className="goal-image">
              <img src={goal.image} alt={goal.goal_type} />
            </div>
            <div className="goal-details">
              <div>
                <strong>Goal ID:</strong> {goal.goal_id}
              </div>
              <div>
                <strong>Goal Type:</strong> {goal.goal_type}
              </div>
              <div>
                <strong>Target Value:</strong> {goal.target_value}
              </div>
              <div>
                <strong>Start Date:</strong> {goal.start_date}
              </div>
              <div>
                <strong>End Date:</strong> {goal.end_date}
              </div>
              <div className="goal-buttons">
                <button onClick={() => handleEditGoal(goal)}>Edit</button>
                <button onClick={() => handleDeleteGoal(goal.goal_id)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="goal-form">
        <input
          type="text"
          name="goal_type"
          value={newGoal.goal_type}
          onChange={handleChange}
          placeholder="Enter goal type"
        />
        <input
          type="number"
          name="target_value"
          value={newGoal.target_value}
          onChange={handleChange}
          placeholder="Enter target value"
        />
        <input
          type="date"
          name="start_date"
          value={newGoal.start_date}
          onChange={handleChange}
        />
        <input
          type="date"
          name="end_date"
          value={newGoal.end_date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={newGoal.image}
          onChange={handleChange}
          placeholder="Enter image URL"
        />
        <button onClick={handleAddGoal}>{newGoal.goal_id ? 'Update Goal' : 'Add Goal'}</button>
      </div>
    </div>
  );
};

export default SetGoalsPage;
