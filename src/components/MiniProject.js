import React from 'react';
import styled from 'styled-components';

import LineChart from './LineChart';

const Container = styled.div`
  box-sizing: border-box;
  min-height: 250px;
  height: 250px;
  min-width: 300px;
  width: 95%;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; 
  cursor: pointer;
`

const GraphTitle = styled.div`
  font-size: 2rem;
`

const TinyGraph = styled.div`
  height: 50%;
  width: 300px;
`

export default function MiniProject({data, goToChart}) {

  const handleClick = () => {
    console.log(data.id);
    goToChart(data.id);
  }

  return (
    <Container onClick={handleClick}>
      <GraphTitle>{data.projectName}</GraphTitle>
      <TinyGraph>
        <LineChart data={data} />
      </TinyGraph>
    </Container>
  )
}
