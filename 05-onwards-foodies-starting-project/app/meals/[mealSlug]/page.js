import Link from "next/link";
export default function DynamicPages({ params }) {
  return (
    <>
      <h2>DynamicPages </h2>
      <p>{params.mealSlug}</p>
      <p>
        <Link href="/">Root Page</Link>
      </p>
      <p>
        <Link href="/meals">Meal Page</Link>
      </p>
      <p>
        <Link href="/meals/share">Share Meal Page</Link>
      </p>
      <p>
        <Link href="/community">Community Page</Link>
      </p>
    </>
  );
}
