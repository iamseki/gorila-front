import React from 'react';
import { XAxis, ScatterChart, Tooltip, YAxis, ZAxis, Legend, Scatter, CartesianGrid } from 'recharts';


interface ComputedData {
  unitPrice: number
  date: string
}

interface GraphProps {
  data: ComputedData[];
}

const Chart: React.FC<GraphProps> = ({ data }: GraphProps) => (
  <ScatterChart
    width={750}
    height={400}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
  >
    <CartesianGrid />
    <XAxis type="category" dataKey={"date"} name="date" />
    <YAxis type="number" dataKey={"unitPrice"} name="unitPrice" unit="R$" />
    <ZAxis range={[100]} />
    <Tooltip cursor={{ strokeDasharray: "2 2" }} />
    <Legend />
    <Scatter className="scatter" name="CDB Unit Prices per Date"data={data} fill="#8884d8" line shape="circle" />
  </ScatterChart>
);

export default Chart;

