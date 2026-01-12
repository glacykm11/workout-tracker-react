import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useWorkoutStore } from "../store/workoutStore";

export default function WorkoutCalendar() {
  const workouts = useWorkoutStore((state) => state.workouts);

  const workoutDates = workouts.map((w) => new Date(w.date).toDateString());

  return (
    <Calendar
      tileClassName={({ date }) => {
        if (workoutDates.includes(date.toDateString())) {
          return "worked-out";
        }
        return "";
      }}
    />
  );
}
