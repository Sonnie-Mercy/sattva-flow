import React, { useState } from 'react';

function SymptomTracker() {
  const [mood, setMood] = useState('');
  const [cramps, setCramps] = useState('');
  const [bloating, setBloating] = useState('');
  const [discharge, setDischarge] = useState('');
  // ... other symptoms

  const handleSymptomChange = (event) => {
    const { name, value } = event.target;
    if (name === 'mood') {
      setMood(value);
    } else if (name === 'cramps') {
      setCramps(value);
    } else if (name === 'bloating') {
      setBloating(value);
    } else if (name === 'discharge') {
      setDischarge(value);
    }
    // ... handle other symptoms
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to send symptom data to the backend (implement later)
    console.log('Mood:', mood, 'Cramps:', cramps, 'Bloating:', bloating, 'Discharge:', discharge); 
    // Clear form fields after submission
    setMood('');
    setCramps('');
    setBloating('');
    setDischarge('');
    // ... clear other symptoms
  };

  return (
    <div>
      <h2>Symptom Tracker</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mood">Mood:</label>
          <select 
            id="mood" 
            name="mood" 
            value={mood} 
            onChange={handleSymptomChange}
          >
            <option value="">Select Mood</option>
            <option value="good">Good</option>
            <option value="neutral">Neutral</option>
            <option value="bad">Bad</option> 
          </select>
        </div>
        <div>
          <label htmlFor="cramps">Cramps:</label>
          <select 
            id="cramps" 
            name="cramps" 
            value={cramps} 
            onChange={handleSymptomChange}
          >
            <option value="">Select Cramps</option>
            <option value="mild">Mild</option>
            <option value="moderate">Moderate</option>
            <option value="severe">Severe</option>
            <option value="none">None</option> 
          </select>
        </div>
        <div>
        <label htmlFor="discharge">Discharge:</label>
          <select 
            id="discharge" 
            name="discharge" 
            value={discharge} 
            onChange={handleSymptomChange}
          >
            <option value="">Select Discharge</option>
            <option value="no discharge">No Discharge</option>
            <option value="light bleeding/spotting">spotting</option>
            <option value="moderate bleeding">moderate bleeding</option>
            <option value="heavy bleeding">heavy bleeding</option>
            <option value="wet cervical mucus">Wet Cervical Mucus</option>
            <option value="sticky cervical mucus">Sticky Cervical Mucus</option>
            </select>
          {/* Add other symptom fields similarly */}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SymptomTracker;