import Link from "next/link"
export default function page() {
  return (
    <div><h2>dynamic page</h2>
    <p> <Link href="/"> Link to the root page </Link></p>
    <p> <Link href="/community"> Link to the  community page </Link></p>
    <p> <Link href="/meal/share"> Link to the  share page </Link></p>
    <p> <Link href="/meal"> Link to the meal page</Link></p>
    </div>
     )
}
