import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import Link from "./Link";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/dashboard", name: "Dashboard" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <nav>
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <AiOutlineClose className="text-2xl" />
        ) : (
          <IoMdMenu className="text-2xl" />
        )}
      </div>
      <ul className={`md:flex p-2 m-2 ${open ? "block" : "hidden"}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
