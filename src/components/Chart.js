import React from 'react';
import styled from 'styled-components';
import LineChart from './LineChart';

export default function Chart({ chartId, data }) {
  console.log(chartId);
  console.log(data);

  const projectData = data.find(project => project.id === chartId);
  console.log(projectData)

  return (
    <div>
      <LineChart data={projectData} />
    </div>
  )
}
