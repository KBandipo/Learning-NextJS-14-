import Link from "next/link"
export default function meal (){
  return (
  <div> <h2>Meal</h2>
 <p> <Link href="/"> Link to the root page </Link></p>
 <p> <Link href="/community"> Link to the  community page </Link></p>
 <p> <Link href="/meal/share"> Link to the  share page </Link></p>
 <p> <Link href="meal/some"> Link to the route page</Link></p>
   
  </div>)
}