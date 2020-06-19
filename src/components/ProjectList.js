import React from 'react';
import styled from 'styled-components';
import MiniProject from './MiniProject';

const Container = styled.div`
  background-color: blue; 
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`
const MiniProjectContainer = styled.div`
  background-color: purple;
  height: 100%;
  min-width: 300px;
  width: 100%;
  display: flex;  
  align-items: center;
  justify-content: center;
  flex-direction: row;
  @media (max-width: 768px) {
    background-color: yellow;
  }
`

const ProjectsContainer = styled.div`
  background-color: pink;
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: center;
  grid-gap: 1.5rem 0;
  @media (max-width: 1064px) {
    grid-template-columns: repeat(2, 50%);
  };
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 100%);
    grid-gap
  }
`

export default function ProjectList({ routeProps, data}) {

  const projects = () => {
    return(
      data.map((data, index) => (
          <MiniProjectContainer key={index}>
            <MiniProject data={data} goToChart={goToChart} />
          </MiniProjectContainer>
      ))
    )
  }

  const goToChart = id => {
    routeProps.history.push(`/charts/${id}`)
  }
  return (
    <Container>
      <h1>Project List</h1>
      <ProjectsContainer>
        {projects()}     
      </ProjectsContainer>
    </Container>
  )
}
