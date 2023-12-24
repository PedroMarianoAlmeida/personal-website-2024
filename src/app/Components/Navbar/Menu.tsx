"use client";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="flex-none">
        <div className="relative">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>

          {showMenu && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-primary rounded-box absolute top-10 right-0 w-28 flex flex-col items-center"
              onMouseLeave={() => setShowMenu(false)}
            >
              <li>
                <Link
                  href="#hero"
                  className="no-underline text-secondary hover:underline underline-offset-4"
                >
                  <button>Home</button>
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="no-underline text-secondary hover:underline underline-offset-4"
                >
                  <button>Skills</button>
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="no-underline text-secondary hover:underline underline-offset-4"
                >
                  <button>Portfolio</button>
                </Link>
              </li>
              <li>
                <Link
                  href="#history"
                  className="no-underline text-secondary hover:underline underline-offset-4"
                >
                  <button>History</button>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
