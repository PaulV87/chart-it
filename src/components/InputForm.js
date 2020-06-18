import React, { useState } from 'react';
import useInputState from "../hooks/useInputState";

function InputForm({ setUser, setData, data}) {
  const [userValue, handleUserChange, userReset] = useInputState("");
  const [weightValue, handleWeightChange, weightReset] = useInputState("");
  const [dayValue, handleDayChange, dayReset] = useInputState("");

  const formSubmit = (user, weight, day) => {
    setUser(user);
  
    setData([...data, {weight, day} ])
  }
  return (
    <div>    
      <form 
        onSubmit={e => {
          e.preventDefault();
          formSubmit(userValue, weightValue, dayValue);
          userReset();
          weightReset();
        }}
      >
        <label htmlFor="NameInput">User Name</label>
        <input
          id="NameInput"
          value={userValue} 
          onChange={handleUserChange} 
          margin="normal" 
          label="Add new todo" 
        />
        <label htmlFor="WeightInput">Weight</label>
        <input
          id="WeightInput"
          value={weightValue} 
          onChange={handleWeightChange} 
          margin="normal" 
          label="Add new todo" 
        />

        <label htmlFor="DayInput">Day</label>
        <input
          id="DayInput"
          value={dayValue} 
          onChange={handleDayChange} 
          margin="normal" 
          label="Add new todo" 
        />

        <button>Add</button>
      </form>
    </div>
  )
}

export default InputForm
