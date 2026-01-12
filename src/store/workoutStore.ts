import { create } from "zustand";
import type { Workout } from "../types/workout";
import { getWorkouts, saveWorkout } from "../services/workoutStorage";

interface WorkoutStore {
  workouts: Workout[];
  addWorkout: (workout: Workout) => void;
  loadWorkouts: () => void;
}

export const useWorkoutStore = create<WorkoutStore>((set) => ({
  workouts: [],
  loadWorkouts: () => {
    set({ workouts: getWorkouts() });
  },
  addWorkout: (workout) => {
    saveWorkout(workout);
    set((state) => ({
      workouts: [...state.workouts, workout],
    }));
  },
}));
