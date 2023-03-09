export type Muscle = 
    "Abdominals" | "Abductors" | "Adductors" | "Biceps" | 
    "Lower Back" | "Upper Back" | "Cardio" | "Chest" | "Calves" |
    "Forearms" | "Glutes" | "Hamstrings" | "Lats" | "Olympic" | 
    "Quadriceps" | "Shoulders" | "Triceps" | "Traps" | "Full Body" |
    "Other"
;

export type Equipment = 
    "None" | "Barbell" | "Dumbbell" | "Kettlebell" | "Cable" | 
    "Machine" | "Plate" | "Resistance Band" | "Suspension" | "Other"
;

export type ExerciseStyle = 
    "Weight Reps" | "Reps only" | "Weighted Bodyweight" | 
    "Assisted Bodyweight" | "Duration" | "Distance Duration" | 
    "Weight & Distance"
;


export interface Exercise {
    name: string;
    equipment: string;
    primary: Muscle;
    img: string; // TODO: figure out a good type for img
    style: ExerciseStyle;
}