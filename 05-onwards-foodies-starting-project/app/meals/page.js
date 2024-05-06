import Link from "next/link";
export default function MealsPage() {
  return (
    <div>
      <h2>Meals Page</h2>
      <p>
        <Link href="/">Root Main Page</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meal Page</Link>
      </p>
      <p>
        <Link href="/community">Community Page</Link>
      </p>
      <p>
        <Link href="/meals/aas">Meal Page</Link>
      </p>
    </div>
  );
}
