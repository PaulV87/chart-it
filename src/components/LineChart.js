import React from 'react';
import { Line } from 'react-chartjs-2';

export default function LineChart(props) {
  const { data } = props;    

  /*
  const buildDataArray = () => {
    const dataArray = [];
    data.projectData.forEach((dataSet) => {
      let newData = {data: dataSet.data.map(d => d),
        label: `${dataSet.label}`,
        borderColor: `${dataSet.borderColor}`,
        fill: true
      }
      dataArray.push(newData);
    })
    return dataArray;
  } 
  */   

  // This function builds up an array that chartjs can use as its data set input. 
  // It dynamically builds up the array so that users can track any amount of objects on the same chart
  const buildLineChartDataArray = () =>  data.projectData.map(
    ({data, label, borderColor, fill}) => ({
      data,
      label,
      borderColor,
      fill
    })
  )      

  const lineChart = (
    data ? (
      <Line 
        data={{
          labels: data.xAxis,
          datasets: buildLineChartDataArray()
        }}
      />
    ) : null
  );

  return (
    <div className="chart-container">
      {lineChart}
    </div>
  )
}