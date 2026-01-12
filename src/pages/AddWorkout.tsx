import { useState } from "react";
import type { Workout } from "../types/workout";

export default function AddWorkout() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  function handleSave() {
    const workout: Workout = {
      id: crypto.randomUUID(),
      name,
      date,
      duration: 0
    };

    console.log("Novo treino:", workout);
    alert("Treino salvo");
  }

  return (
    <div>
      <h2>Novo Treino</h2>

      <input
        placeholder="Ex: Pernas, Peito..."
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <button onClick={handleSave}>Salvar</button>
    </div>
  );
}
