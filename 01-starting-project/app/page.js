import Link from "next/link";

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Main Page</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/meal"> Link to the  meal page </Link></p>
     <p> <Link href="/community"> Link to the  community page </Link></p>
      <p><Link href="/meal/share"> Link to the  share page </Link></p>
   
     <p> <Link href="/meal/some"> Link to the route page</Link></p>
   
    </main>
  );
}
