"use client";

import styles from "./WorkLocationTrends.module.scss";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

export default function WorkLocationTrends() {
  return (
    <ResponsiveContainer className={styles.chartContainer}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip
          separator=": "
          formatter={(value, name) => {
            if (name === "uv") return [value, "Work from home"];
            if (name === "amt") return [value, "Work from office"];
            return [value, name];
          }}
          labelClassName="font-bold"
          wrapperClassName={styles.tooltipWrapper}
        />
        <Legend
          iconType="circle"
          formatter={(value) => {
            if (value === "uv")
              return <span className={styles.legendText}>Work from home</span>;
            if (value === "amt")
              return (
                <span className={styles.legendText}>Work from office</span>
              );
            return value;
          }}
        />
        <Bar dataKey="uv" stackId={1} fill="#ec4899" />
        <Bar dataKey="amt" stackId={1} fill="#6b7280" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
