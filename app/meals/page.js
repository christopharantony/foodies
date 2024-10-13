import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Explore the World of Meals!
      </h1>
      <p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem",
            marginTop: "8rem",
          }}
        >
          <Link href="/meals">Meals</Link>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <Link href="/meals/share">Share Meals</Link>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <Link href="/community">Community</Link>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <Link href="/meals/1">Meal 1</Link>
        </div>
        <div
          style={{ display: "flex", justifyContent: "center", margin: "2rem" }}
        >
          <Link href="/meals/fav">Favorite Meals</Link>
        </div>
      </p>
    </main>
  );
}
