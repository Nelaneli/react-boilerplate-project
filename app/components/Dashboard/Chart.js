import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  Legend,
  Tooltip,
  // eslint-disable-next-line import/no-unresolved
} from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(date, death, recovered) {
  return { date, death, recovered };
}

const data = [
  createData('12 Jun', 313, 5292),
  createData('13 Jun', 149, 4655),
  createData('14 Jun', 237, 6143),
  createData('15 Jun', 164, 6407),
  createData('16 Jun', 196, 6229),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Tren Kasus di Indonesia</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 16,
            bottom: 0,
            left: 24,
          }}
          width={7000}
          height={250}
        >
          <XAxis dataKey="date" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              orang
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="death"
            stroke={theme.palette.error.main}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="recovered"
            stroke={theme.palette.primary.main}
            dot={false}
          />
          <Tooltip />
          <Legend verticalAlign="top" height={25} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
