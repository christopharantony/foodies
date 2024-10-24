"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

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

  await saveMeal(meal);
  redirect("/meals");
}
