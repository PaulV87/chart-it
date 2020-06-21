import React, {useState } from 'react';
import useInputState from "../hooks/useInputState";
import styled from 'styled-components';
import InputFormField from './InputFormField';
import { v4 as uuidv4 } from 'uuid';

const Form = styled.form`
  background-color: orange;
  display: flex;
  width: 60vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const FormField = styled.div`
  background-color: white;
  min-width: 450px;
  padding: 10px 0;
`

const FormFieldLabel = styled.label`
  font-size: 1.2rem;
`

const FormFieldInput = styled.input`
  border-radius: 4px;
  padding: 5px;
`

function InputForm({ data, handleDataChange }) {
  const [label, setLabel] = useState([]);
  const [xAxis, setxAxis] = useState([]);

  const [projectValue, handleProjectChange, projectReset] = useInputState("");
  const [labelValue, handleLabelChange, labelReset] = useInputState("");
  const [xAxisValue, handlexAxisChange, xAxisReset] = useInputState("");

  const formSubmit = (evt, label) => {
    evt.preventDefault();
    projectReset();
    labelReset();
    xAxisReset();
  }

  const addData = (array, dataValue, reset, setField) => {
    setField([...array, dataValue]);    
    reset();
  }

  const createProjectData = (newLabel) => {
    const newData = {
      label: newLabel,
      id: uuidv4(),
      borderColor: "blue",
      data: [],
      fill: true,
    }

    setLabel([...label, newData]);
  }

  const setProjectDataArray = (input, id) => {   
    setLabel(label.map(object => object.id === id ? {...object, data: [...object.data, input]} : object)); 
  }

  const createFormFields = () => {
    return label.map((data, index) => (
      <FormField key={index}>
        <InputFormField title={data.label} id={data.id} setProjectDataArray={setProjectDataArray}/>
      </FormField>
    ))
  }


  return (
    <div>    
      <Form 
        onSubmit={e => {
          formSubmit(e, labelValue);
        }}
      >
        <FormField>
          <FormFieldLabel htmlFor="ProjectName">Project Name</FormFieldLabel>
          <FormFieldInput
            id="ProjectName"
            value={projectValue} 
            onChange={handleProjectChange} 
          />
        </FormField>
        <h2>Project Data</h2>
        <FormField>
          <FormFieldLabel htmlFor="labelInput">Label Name</FormFieldLabel>
          <FormFieldInput
            id="labelInput"
            value={labelValue} 
            onChange={handleLabelChange} 
          />        
        <button onClick={() => createProjectData(labelValue)}>Add label</button>
        </FormField>
        {createFormFields()}
        <h2>X Axis Data</h2>
        <FormField>
          <FormFieldLabel htmlFor="xAxisInput">X Axis</FormFieldLabel>
          <FormFieldInput
            id="xAxisInput"
            value={xAxisValue} 
            onChange={handlexAxisChange} 
          />        
        <button onClick={() => addData(xAxis, xAxisValue, xAxisReset, setxAxis)}>Add X Axis</button>
        </FormField>
        <button onClick={e => {
          formSubmit(e, labelValue);
        }}>Submit</button>
      </Form>
      <h1>Data preview</h1>
      <div>
        <h2>Labels</h2>
        {label.map( object => object.label)}
      </div>
      <div>
        <h2>XAxis</h2>
        {xAxis}
      </div>

    </div>
  )
}

export default InputForm
