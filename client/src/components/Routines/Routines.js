import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function Routines() {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await axios.get('/api/routines'); 
        setRoutines(response.data); 
      } catch (error) {
        console.error('Error fetching routines:', error); 
      }
    };

    fetchRoutines();
  }, []);

  return (
    <div>
      <h1>Your Routines</h1>
      <ul>
        {routines.map((routine) => (
          <li key={routine._id}> 
            {/* Display routine name or a brief summary */}
            {routine.name} 
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Routines;