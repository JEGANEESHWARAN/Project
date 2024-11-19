// src/PieChart.js

import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Container } from 'react-bootstrap';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
  // Data for the pie chart
  const data = {
    labels: ['Programming Quiz', 'Verbal Test ', 'Subject Quiz'],
    datasets: [
      {
        label: '',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132 )',
          'rgba(54, 162, 235 )',
          'rgba(255, 206, 86)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
    
  };
  const data1 = {
    labels: ['Programming Quiz', 'Verbal Test ', 'Subject Quiz'],
    datasets: [
      {
        label: '',
        data: [12, 9, 3],
        backgroundColor: [
          'rgba(255, 99, 132 )',
          'rgba(54, 162, 235 )',
          'rgba(255, 206, 86)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
    
  };

  return (
    <div className='d-flex flex-warp mb-5'>
    <Container style={{ maxWidth: '400px', margin: '0 ' }}>
      <h2 className="  mb-4">Recently</h2>
      <div style={{ width: '100%', height: '300px' }}>
        <Pie data={data} />
        
      </div>
    </Container>
    <Container style={{ maxWidth: '400px', margin: '0 ' }}>
      <h2 className=" mb-4">last month</h2>
      <div style={{ width: '100%', height: '300px' }}>
        <Pie data={data1} />
        
      </div>
    </Container>
  </div>
  );
};

export default PieChart;
