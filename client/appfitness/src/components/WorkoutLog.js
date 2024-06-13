import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WorkoutLog.css';

const WorkoutLog = () => {
  const [workouts, setWorkouts] = useState([]);
  const [newWorkout, setNewWorkout] = useState('');

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/workouts/');
      setWorkouts(response.data);
    } catch (error) {
      console.error('Error fetching workouts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/workouts/${id}`);
      fetchWorkouts();
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  const handleUpdate = async (id, updatedWorkout) => {
    try {
      await axios.put(`http://localhost:3000/api/workouts/${id}`, updatedWorkout);
      fetchWorkouts();
    } catch (error) {
      console.error('Error updating workout:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:3000/api/workouts/', { description: newWorkout });
      setNewWorkout('');
      fetchWorkouts();
    } catch (error) {
      console.error('Error creating workout:', error);
    }
  };

  const handleChange = (id, field, value) => {
    const updatedWorkout = workouts.map(workout => {
      if (workout.workout_id === id) {
        return { ...workout, [field]: value };
      }
      return workout;
    });

    setWorkouts(updatedWorkout);
  };

  return (
    <div className="workout-log-container">
      <h3>Workout Log</h3>
      <div className="workout-form">
        <input
          type="text"
          value={newWorkout}
          onChange={(e) => setNewWorkout(e.target.value)}
          placeholder="New workout"
        />
        <button className="create-btn" onClick={handleCreate}>
          Create New Workout
        </button>
      </div>
      <div className="card-container">
        {workouts.map((workout) => (
          <div className="card" key={workout.workout_id}>
            <div>
              <input
                type="text"
                value={workout.exercise_type}
                onChange={(e) => handleChange(workout.workout_id, 'exercise_type', e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                value={workout.duration}
                onChange={(e) => handleChange(workout.workout_id, 'duration', e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                value={workout.intensity}
                onChange={(e) => handleChange(workout.workout_id, 'intensity', e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                value={workout.date}
                onChange={(e) => handleChange(workout.workout_id, 'date', e.target.value)}
              />
            </div>
            <div className="card-actions">
              <button className="delete-btn" onClick={() => handleDelete(workout.workout_id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutLog;
