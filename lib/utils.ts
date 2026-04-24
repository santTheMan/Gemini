import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clamp01(v: number) {
  return Math.max(0, Math.min(1, v));
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
