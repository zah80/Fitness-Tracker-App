import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FoodLogs.css';

function FoodLog() {
  const [foodLogs, setFoodLogs] = useState([]);
  const [newLog, setNewLog] = useState('');

  useEffect(() => {
    fetchFoodLogs();
  }, []);

  const fetchFoodLogs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/foodlogs/');
      setFoodLogs(response.data);
    } catch (error) {
      console.error('Error fetching food logs:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/http://localhost:3000/api/foodlogs/${id}`);
      fetchFoodLogs();
    } catch (error) {
      console.error('Error deleting food log:', error);
    }
  };

  const handleUpdate = async (id, description) => {
    try {
      await axios.put(`/http://localhost:3000/api/foodlogs/${id}`, { description });
      fetchFoodLogs();
    } catch (error) {
      console.error('Error updating food log:', error);
    }
  };

  const handleCreate = async () => {
    try {
      await axios.post('/http://localhost:3000/api/foodlogs/', { description: newLog });
      setNewLog('');
      fetchFoodLogs();
    } catch (error) {
      console.error('Error creating food log:', error);
    }
  };

  return (
    <div className="food-log-container">
      <h3>Food Log</h3>
      <input 
        type="text" 
        value={newLog} 
        onChange={(e) => setNewLog(e.target.value)} 
        placeholder="New food log" 
      />
      <button className="create-btn" onClick={handleCreate}>Create New Food Log</button>
      <div className="card-container">
        {foodLogs.map((log) => (
          <div className="card" key={log.id}>
            <input 
              type="text" 
              value={log.description} 
              onChange={(e) => handleUpdate(log.id, e.target.value)} 
            />
            <div className="card-actions">
              <button className="delete-btn" onClick={() => handleDelete(log.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodLog;
