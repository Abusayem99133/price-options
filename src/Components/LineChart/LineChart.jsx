import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentMarks = [
    { name: "Alice", math: 85, physics: 78, chemistry: 92 },
    { name: "Bob", math: 72, physics: 80, chemistry: 85 },
    { name: "Charlie", math: 90, physics: 88, chemistry: 75 },
    { name: "David", math: 65, physics: 70, chemistry: 68 },
    { name: "Emma", math: 88, physics: 92, chemistry: 90 },
    { name: "Frank", math: 78, physics: 85, chemistry: 80 },
    { name: "Grace", math: 92, physics: 95, chemistry: 88 },
    { name: "Henry", math: 70, physics: 72, chemistry: 65 },
    { name: "Ivy", math: 83, physics: 85, chemistry: 80 },
    { name: "Jack", math: 75, physics: 78, chemistry: 72 },
  ];
  return (
    <div>
      <LChart width={900} height={400} data={studentMarks}>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics" stroke="blue"></Line>
        <Line dataKey="chemistry" stroke="yellow"></Line>
        <XAxis dataKey="name" />
        <YAxis />
      </LChart>
    </div>
  );
};

export default LineChart;
