import {
  LineChart as Lchart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChart = () => {
  const studentsData = [
    { id: 1, name: "Alice Johnson", physics: 85, chemistry: 78, biology: 88 },
    { id: 2, name: "Bob Smith", physics: 79, chemistry: 82, biology: 74 },
    { id: 3, name: "Charlie Davis", physics: 92, chemistry: 89, biology: 95 },
    { id: 4, name: "Diana Garcia", physics: 88, chemistry: 84, biology: 90 },
    { id: 5, name: "Ethan Martinez", physics: 74, chemistry: 79, biology: 80 },
    { id: 6, name: "Fiona Brown", physics: 91, chemistry: 85, biology: 87 },
    { id: 7, name: "George Wilson", physics: 83, chemistry: 78, biology: 82 },
    { id: 8, name: "Hannah Lee", physics: 95, chemistry: 92, biology: 96 },
    { id: 9, name: "Isaac Walker", physics: 79, chemistry: 81, biology: 85 },
    { id: 10, name: "Julia Harris", physics: 87, chemistry: 88, biology: 89 },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <Lchart data={studentsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="physics" stroke="#8884d8" />
          <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
          <Line type="monotone" dataKey="biology" stroke="#ffc658" />
        </Lchart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
