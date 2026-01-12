import { useEffect } from "react";
import { useWorkoutStore } from "../store/workoutStore";

export default function Home() {
  const { workouts, loadWorkouts } = useWorkoutStore();

  useEffect(() => {
    loadWorkouts();
  }, []);

  return (
    <div>
      <h2>Meus Treinos</h2>

      {workouts.length === 0 && <p>Nenhum treino registrado.</p>}

      {workouts.map((w) => (
        <div key={w.id}>
          <strong>{w.name}</strong> – {w.date} – {Math.floor(w.duration / 60)}{" "}
          min
        </div>
      ))}
    </div>
  );
}
