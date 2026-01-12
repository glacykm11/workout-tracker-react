import type { Workout } from "../types/workout";

const KEY = "workouts";

export function getWorkouts(): Workout[] {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export function saveWorkout(workout: Workout) {
  const workouts = getWorkouts();
  workouts.push(workout);
  localStorage.setItem(KEY, JSON.stringify(workouts));
}
