import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const defaultHearts = 5;
export const pointsPerChallenege = 10;

export enum CHALLENGE_TYPE_ENUM {
  SELECT = "SELECT",
  ASSIST = "ASSIST",
}
