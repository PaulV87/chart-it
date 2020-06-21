import React from 'react';
import useInputState from "../hooks/useInputState";

export default function InputFormField({title, id, setProjectDataArray}) {
  const [inputValue, handleInputChange, inputReset] = useInputState("");
  const handleClick = () => {
    setProjectDataArray(inputValue, id);
  }
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <input id={title} value={inputValue} onChange={handleInputChange} />
      <button onClick={handleClick}>Add label</button>
    </div>
  )
}
