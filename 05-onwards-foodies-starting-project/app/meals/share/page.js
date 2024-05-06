import Link from "next/link";
export default function SharePage() {
  return (
    <div>
      <h2>Share Page</h2>
      <p>
        <Link href="/">Root Main Page</Link>
      </p>
      <p>
        <Link href="/meal">Meal Page</Link>
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
