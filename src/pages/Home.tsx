import { useEffect } from "react";
import { useWorkoutStore } from "../store/workoutStore";

import WorkoutCalendar from "../components/WorkoutCalendar";
import { WeeklyChart } from "../components/WeeklyChart";

export default function Home() {
  const { workouts, loadWorkouts } = useWorkoutStore();

  useEffect(() => {
    loadWorkouts();
  }, []);

  return (
    <div>
      <h2>Meus Treinos</h2>

      <WorkoutCalendar />

      {workouts.length === 0 && <p>Nenhum treino registrado.</p>}

      {workouts.map((w) => (
        <div key={w.id}>
          <strong>{w.name}</strong> – {w.date} – {Math.floor(w.duration / 60)}{" "}
          min
        </div>
      ))}

      <h3>Seu progresso da semana</h3>
      <WeeklyChart />
    </div>
  );
}
