import Navbar2 from "./components/Navbar2";
import { Outlet } from "react-router";

export default function Layout2() {
  return (
    <>
      {/* we are rending the bar to the user so they can see it  */}
      <Navbar2 />
      <main>
        <Outlet />
        {/* this outlet tag render all the child routes that are in this tag and make the nav bar exsit outside of the page */}
      </main>
    </>
  );
}
