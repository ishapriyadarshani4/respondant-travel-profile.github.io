import React, { useState } from 'react';

function RespondentTravelProfile() {

  const [meansOfTravel, setMeansOfTravel] = useState('');
  const [totalDistance, setTotalDistance] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit data to API or backend here
  }

  return (
      <div>
      <h1>Respondent Travel Profile</h1>
    <form onSubmit={handleSubmit}>
      <label>
          What is your most frequently used means of travel from your home to work location?
        <br />
        <input type="radio" name="meansOfTravel" value="Bus" onChange={e => setMeansOfTravel(e.target.value)} /> Bus
          /
        <input type="radio" name="meansOfTravel" value="Metro" onChange={e => setMeansOfTravel(e.target.value)} /> Metro
         /
        <input type="radio" name="meansOfTravel" value="Own Two-wheeler" onChange={e => setMeansOfTravel(e.target.value)} /> Own Two-wheeler
         /
        <input type="radio" name="meansOfTravel" value="Own Car" onChange={e => setMeansOfTravel(e.target.value)} /> Own Car
        
        <input type="radio" name="meansOfTravel" value="Walk/Bicycle" onChange={e => setMeansOfTravel(e.target.value)} /> Walk/Bicycle
        <br/>
        <input type="radio" name="meansOfTravel" value="Auto" onChange={e => setMeansOfTravel(e.target.value)} /> Auto
        <br />
        <input type="radio" name="meansOfTravel" value="App based ride hailing cab services including Ola / Uber" onChange={e => setMeansOfTravel(e.target.value)} /> App based ride hailing cab services including Ola / Uber
      </label>
      <br />
      <label>
          What is the total distance between your home and work location?
        <br />
        <input type="radio" name="totalDistance" value="Less than 5 km" onChange={e => setTotalDistance(e.target.value)} /> Less than 5 km
        
        <input type="radio" name="totalDistance" value="5-10 km" onChange={e => setTotalDistance(e.target.value)} /> 5-10 km
        <br />
        <input type="radio" name="totalDistance" value="10-15 km" onChange={e => setTotalDistance(e.target.value)} /> 10-15 km
        
        <input type="radio" name="totalDistance" value="15-20 km" onChange={e => setTotalDistance(e.target.value)} /> 15-20 km
         /
        <input type="radio" name="totalDistance" value="20-25 km" onChange={e => setTotalDistance(e.target.value)} /> 20-25 km
        
        <input type="radio" name="totalDistance" value="More than 25 km" onChange={e => setTotalDistance(e.target.value)} /> More than 25 km
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
  );
}

export default RespondentTravelProfile;
