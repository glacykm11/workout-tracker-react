import type { Workout } from "../types/workout";

export function getWeeklyStats(workouts: Workout[]) {
  const today = new Date();
  const days = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(today.getDate() - i);

    const key = d.toLocaleDateString("en-CA"); // YYYY-MM-DD

    const trained = workouts.some((w) => w.date === key);

    days.push({
      label: d.toLocaleDateString("pt-BR", { weekday: "short" }),
      value: trained ? 1 : 0,
    });
  }

  return days;
}
