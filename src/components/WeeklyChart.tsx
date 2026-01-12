import { useWorkoutStore } from "../store/workoutStore";
import { getWeeklyStats } from "../utils/getWeeklyStats";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function WeeklyChart() {
  const workouts = useWorkoutStore((state) => state.workouts);
  const data = getWeeklyStats(workouts);

  return (
    <div style={{ width: "100%", height: 200 }}>
      <ResponsiveContainer>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis hide />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
