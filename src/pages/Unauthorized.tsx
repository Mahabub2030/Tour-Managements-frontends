import { Link } from "react-router";


export default function Unauthorized() {
  return (
    <div>
      <h1> Your are unauthorized ,you can go your home</h1>
      <Link to="/">Home</Link>
    </div>
  )
}
