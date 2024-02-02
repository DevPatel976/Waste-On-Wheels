import React from 'react'
import { BarChart } from '@mantine/charts';

export const data = [
  { month: 'January',  Collect: 200, Recycle: 130 },
  { month: 'February', Collect: 500, Recycle: 275 },
  { month: 'March', Collect: 1000, Recycle: 476 },
  { month: 'April', Collect: 700, Recycle: 508 },
  { month: 'May', Collect: 1400, Recycle: 1000 },
  { month: 'June', Collect: 1000, Recycle: 700 },
];

const Chart = () => {
  return (
    <div>
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      series={[
        { name: 'Collect', color: 'blue.6' },
        { name: 'Recycle', color: 'teal.6' },
      ]}
      tickLine="y"
      />
      
    </div>
  )
}

export default Chart