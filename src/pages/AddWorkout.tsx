import { useState } from "react";
import type { Workout } from "../types/workout";

import Timer from "../components/Timer";
import { useWorkoutStore } from "../store/workoutStore";

export default function AddWorkout() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState(0);
  const addWorkout = useWorkoutStore((state) => state.addWorkout);

  function handleSave() {
    const workout: Workout = {
      id: crypto.randomUUID(),
      name,
      date,
      duration: duration,
    };

    addWorkout(workout);
    alert("Treino salvo");
  }

  return (
    <div>
      <h2>Novo Treino</h2>

      <input
        placeholder="Ex: Pernas, Peito..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleSave}>Salvar</button>

      <Timer onFinish={setDuration} />
    </div>
  );
}
