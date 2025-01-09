import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import SymptomTracker from './SymptomTracker'; 

function CycleTracker() {
  const [cycles, setCycles] = useState([]);

  useEffect(() => {
    const fetchCycles = async () => {
      try {
        const response = await axios.get('/api/cycles'); 
        setCycles(response.data); 
      } catch (error) {
        console.error('Error fetching cycles:', error); 
      }
    };

    fetchCycles();
  }, []);

  return (
    <div>
      <h1>Cycle Tracker</h1>
      {/* Optional: Display cycle data (e.g., last period start date) */}
      {cycles && cycles.length > 0 && (
        <p>Last Period Start: {cycles[cycles.length - 1].startDate}</p> 
      )}
      <SymptomTracker /> 
    </div>
  );
}

export default CycleTracker;