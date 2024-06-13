// import React, { useState } from 'react';
// import './GoalSetting.css';

// const SetGoalsPage = () => {
//   const [goals, setGoals] = useState([
//     {
//       goal_id: 1,
//       goal_type: 'Distance jumping',
//       target_value: 1000,
//       start_date: '2024-01-01',
//       end_date: '2024-12-31',
//       image: 'jumping.jpg'
//     },
//     {
//       goal_id: 2,
//       goal_type: 'Distance running',
//       target_value: 500,
//       start_date: '2024-01-01',
//       end_date: '2024-12-31',
//       image: 'running.jpg'
//     }
//   ]);

//   const [newGoal, setNewGoal] = useState({
//     goal_id: null,
//     goal_type: '',
//     target_value: '',
//     start_date: '',
//     end_date: '',
//     image: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewGoal((prevGoal) => ({
//       ...prevGoal,
//       [name]: value
//     }));
//   };

//   const handleAddGoal = () => {
//     if (newGoal.goal_type.trim() !== '' && newGoal.target_value !== '' && newGoal.start_date !== '' && newGoal.end_date !== '' && newGoal.image !== '') {
//       if (newGoal.goal_id) {
//         // Update existing goal
//         const updatedGoals = goals.map((goal) =>
//           goal.goal_id === newGoal.goal_id ? { ...newGoal } : goal
//         );
//         setGoals(updatedGoals);
//       } else {
//         // Add new goal
//         const nextId = goals.length > 0 ? goals[goals.length - 1].goal_id + 1 : 1;
//         const updatedGoals = [...goals, { ...newGoal, goal_id: nextId }];
//         setGoals(updatedGoals);
//       }
//       setNewGoal({
//         goal_id: null,
//         goal_type: '',
//         target_value: '',
//         start_date: '',
//         end_date: '',
//         image: ''
//       });
//     }
//   };

//   const handleEditGoal = (goal) => {
//     setNewGoal({ ...goal });
//   };

//   const handleDeleteGoal = (goal_id) => {
//     const updatedGoals = goals.filter((goal) => goal.goal_id !== goal_id);
//     setGoals(updatedGoals);
//   };

//   return (
//     <div className="set-goals-page">
//       <h1>Set Goals</h1>
//       <div className="goal-list">
//         {goals.map((goal) => (
//           <div key={goal.goal_id} className="goal-item">
//             <div>
//               <strong>Goal ID:</strong> {goal.goal_id}
//             </div>
//             <div>
//               <strong>Goal Type:</strong> {goal.goal_type}
//             </div>
//             <div>
//               <strong>Target Value:</strong> {goal.target_value}
//             </div>
//             <div>
//               <strong>Start Date:</strong> {goal.start_date}
//             </div>
//             <div>
//               <strong>End Date:</strong> {goal.end_date}
//             </div>
//             <div>
//               <strong>Image:</strong> <img src={goal.image} alt={goal.goal_type} style={{ width: '100px', height: '100px' }} />
//             </div>
//             <div className="goal-buttons">
//               <button onClick={() => handleEditGoal(goal)}>Edit</button>
//               <button onClick={() => handleDeleteGoal(goal.goal_id)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="goal-form">
//         <input
//           type="text"
//           name="goal_type"
//           value={newGoal.goal_type}
//           onChange={handleChange}
//           placeholder="Enter goal type"
//         />
//         <input
//           type="number"
//           name="target_value"
//           value={newGoal.target_value}
//           onChange={handleChange}
//           placeholder="Enter target value"
//         />
//         <input
//           type="date"
//           name="start_date"
//           value={newGoal.start_date}
//           onChange={handleChange}
//         />
//         <input
//           type="date"
//           name="end_date"
//           value={newGoal.end_date}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="image"
//           value={newGoal.image}
//           onChange={handleChange}
//           placeholder="Enter image URL"
//         />
//         <button onClick={handleAddGoal}>{newGoal.goal_id ? 'Update Goal' : 'Add Goal'}</button>
//       </div>
//     </div>
//   );
// };

// export default SetGoalsPage;
