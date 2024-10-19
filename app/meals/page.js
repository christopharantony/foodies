import Link from "next/link";
import MealsGrid from "@/components/main-header/meals/meal-grid";
import { getMeals } from "@/lib/meals";

import classes from "./page.module.css";
import { Suspense } from "react";
import MealsLoading from "./MealsLoading";
const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};
export default function MealsPage() {
  return (
    <>
      <header className={classes?.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes?.highlight}>by you</span>
        </h1>
        <p>
          Choose your favourite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes?.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes?.main}>
        <Suspense fallback={<MealsLoading />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
