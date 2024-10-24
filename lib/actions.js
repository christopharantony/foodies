"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.length < 3;
}

export async function shareMeal(formData) {
  const data = Object.fromEntries(formData);
  const meal = {
    creator: data.name,
    creator_email: data.email,
    title: data.title,
    summary: data.summary,
    instructions: data.instructions,
    image: data.image,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image.name ||
    meal.image.size === 0
  ) {
    throw new Error("Invalid Input");
  }

  await saveMeal(meal);
  redirect("/meals");
}
