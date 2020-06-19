import React from 'react';
import styled from 'styled-components';
import InputForm from './InputForm';

export default function NewChart({data, handleDataChange}) {
  return (
    <div>
      New Charts made here
      <InputForm data={data} handleDataChange={handleDataChange}/>
    </div>
  )
}
