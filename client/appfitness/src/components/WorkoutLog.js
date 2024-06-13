import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WorkoutLog.css';

const WorkoutLog = () => {
  const [workouts, setWorkouts] = useState([
    {
      workout_id: 1,
      exercise_type: 'Running',
      duration: 45.50,
      date: '2024-06-14T22:00:00.000Z',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/640px-Ludovic_and_Lauren_%288425515069%29.jpg',
    },
    {
      workout_id: 2,
      exercise_type: 'Weightlifting',
      duration: 60.00,
      date: '2024-06-15T22:00:00.000Z',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2MVChiVtH_TSkLq0ZmXBHy8Gcoy0x5QOPg&s'
    }
  ]);
  const [newWorkout, setNewWorkout] = useState({
    exercise_type: '',
    duration: '',
    date: '',
    image: '',
  });
  const [selectedWorkout, setSelectedWorkout] = useState(null);

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

  const handleCreate = async () => {
    if (!newWorkout.exercise_type || !newWorkout.duration || !newWorkout.date) {
      console.error('Please fill out all fields');
      return;
    }
    try {
      await axios.post('http://localhost:3000/api/workouts/', newWorkout);
      setNewWorkout({
        exercise_type: '',
        duration: '',
        date: '',
        image: '',
      });
      fetchWorkouts();
    } catch (error) {
      console.error('Error creating workout:', error);
    }
  };

  const handleUpdate = async () => {
    if (!selectedWorkout) return;
    try {
      await axios.put(`http://localhost:3000/api/workouts/${selectedWorkout.workout_id}`, selectedWorkout);
      setSelectedWorkout(null);
      fetchWorkouts();
    } catch (error) {
      console.error('Error updating workout:', error);
    }
  };

  return (
    <div className="workout-log-container">
      <h3>Workout Log</h3>
      <div className="card-container">
        {workouts.map((workout) => (
          <div className="card" key={workout.workout_id}>
            <img src={workout.image} alt={workout.exercise_type} className="workout-image" />
            <div className="card-content">
              <div className="card-item">
                <strong>Exercise Type:</strong> {workout.exercise_type}
              </div>
              <div className="card-item">
                <strong>Duration:</strong> {workout.duration}
              </div>
              <div className="card-item">
                <strong>Date:</strong> {new Date(workout.date).toLocaleDateString()}
              </div>
            </div>
            <div className="card-actions">
              <button className="update-btn" onClick={() => setSelectedWorkout(workout)}>
                Update
              </button>
              <button className="delete-btn" onClick={() => handleDelete(workout.workout_id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="workout-form">
        <h4>Create New Workout</h4>
        <input
          type="text"
          value={newWorkout.exercise_type}
          onChange={(e) => setNewWorkout({ ...newWorkout, exercise_type: e.target.value })}
          placeholder="Exercise Type"
        />
        <input
          type="text"
          value={newWorkout.duration}
          onChange={(e) => setNewWorkout({ ...newWorkout, duration: e.target.value })}
          placeholder="Duration"
        />
        <input
          type="date"
          value={newWorkout.date}
          onChange={(e) => setNewWorkout({ ...newWorkout, date: e.target.value })}
          placeholder="Date"
        />
        <input
          type="text"
          value={newWorkout.image}
          onChange={(e) => setNewWorkout({ ...newWorkout, image: e.target.value })}
          placeholder="Image URL"
        />
        <button className="create-btn" onClick={handleCreate}>
          Create New Workout
        </button>
      </div>
      {selectedWorkout && (
        <div className="modal">
          <div className="modal-content">
            <h4>Update Workout</h4>
            <input
              type="text"
              value={selectedWorkout.exercise_type}
              onChange={(e) => setSelectedWorkout({ ...selectedWorkout, exercise_type: e.target.value })}
              placeholder="Exercise Type"
            />
            <input
              type="text"
              value={selectedWorkout.duration}
              onChange={(e) => setSelectedWorkout({ ...selectedWorkout, duration: e.target.value })}
              placeholder="Duration"
            />
            <input
              type="text"
              value={selectedWorkout.intensity}
              onChange={(e) => setSelectedWorkout({ ...selectedWorkout, intensity: e.target.value })}
              placeholder="Intensity"
            />
            <input
              type="date"
              value={selectedWorkout.date}
              onChange={(e) => setSelectedWorkout({ ...selectedWorkout, date: e.target.value })}
              placeholder="Date"
            />
            <input
              type="text"
              value={selectedWorkout.image}
              onChange={(e) => setSelectedWorkout({ ...selectedWorkout, image: e.target.value })}
              placeholder="Image URL"
            />
            <button className="update-btn" onClick={handleUpdate}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setSelectedWorkout(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutLog;
