import { Link } from "react-router";

export default function Navbar2() {
  return (
    <>
      <Link to="/"> Home</Link>
      <Link to="/About"> About</Link>
      <Link to="/Leaders"> Leaders</Link>
      <Link to="/Member"> Member</Link>
    </>
  );
}
