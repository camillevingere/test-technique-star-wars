import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCharacterColor = (gender: string) => {
  if (gender === "male") {
    return "bg-blue-900";
  } else if (gender === "female") {
    return "bg-pink-900";
  }
  return "bg-gray-500";
};
export const getGenderTranslation = (gender: string) => {
  if (gender === "male") {
    return "Homme";
  } else if (gender === "female") {
    return "Femme";
  }
  return gender;
};

export function extractIdFromUrl(url: string): number | null {
  const parts = url.split("/");
  const lastPart = parts[parts.length - 2];
  const number = parseInt(lastPart);
  return isNaN(number) ? null : number;
}
