/*
import 'react-vis/dist/style.css';
import { 
  XYPlot, 
  VerticalGridLines,   // Capital 'L'
  HorizontalGridLines, // Capital 'L'
  XAxis, 
  YAxis, 
  LineSeries 
} from 'react-vis';


const Chart = () =>{
   const data = [
    {x: 0, y: 8 },
    {x: 1, y: 5 },
    {x: 2, y: 4 },
    {x: 3, y: 9 },
    {x: 4, y: 1 },
    {x: 5, y: 7 },
    {x: 6, y: 6 },
    {x: 7, y: 3 },
    {x: 8, y: 2 },
    {x: 9, y: 0 },
   ]
   
 return(
    <div style={{marginTop: '15px'}}>
        <XYPlot height={300} width={300}>
            <VerticalGridLines/>
            <HorizontalGridLines/>
            <XAxis/>
            <YAxis/>
            <LineSeries data={data} color="red"/>
            <LineSeries data={data} color="purple"/>
            <LineSeries data={data} color="yellow"/>
        </XYPlot>
    </div>
    )
}

export default Chart;

*/

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const data = [
    {x: 1, y: 8}, {x: 2, y: 5}, {x: 3, y: 4},
    {x: 4, y: 9}, {x: 5, y: 1}, {x: 6, y: 7},
    {x: 7, y: 6}, {x: 8, y: 3}, {x: 9, y: 2},
    {x: 10, y: 0}
  ];

  return (
    <div style={{ marginTop: '15px', width: '500px', height: '400px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="y" stroke="red" dot={false} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;