import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => (
  <div className="navbar bg-base-300 fixed z-10">
    <div className="flex-1">
      <Link href="/">
        <button className="btn btn-ghost normal-case text-xl">
          {"<"}Pedro Programmer{"/>"}
        </button>
      </Link>
    </div>
    <div className="flex-none">
      <Menu />
    </div>
  </div>
);

export default Navbar;
