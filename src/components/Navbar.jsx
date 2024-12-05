import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="shadow-lg p-2 sticky top-0 z-[99999] bg-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-blue-500 font-bold text-xl tracking-wide">
          My navbar
        </h1>
        <div className="flex gap-4 capitalize">
          <NavLink to={"/"}>home</NavLink>
          <NavLink to={"/store"}>Marketplace</NavLink>
          <NavLink to={"/about"}>About pet store</NavLink>
          <NavLink to={"/contact-us"}>Contact us</NavLink>
          <NavLink to={"/dashboard"}>My dashboard</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
