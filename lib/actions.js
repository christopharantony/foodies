"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.length < 3;
}

export async function shareMeal(_prevState, formData) {
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
    return { message: "Invalid Input" };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
