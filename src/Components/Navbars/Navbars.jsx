import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbars = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/", exact: true },
    { id: 2, name: "About", path: "/about", exact: true },
    { id: 3, name: "Services", path: "/services", exact: true },
    { id: 4, name: "Contact", path: "/contact", exact: true },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav className=" text-black bg-purple-300 p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>

      <ul
        className={`md:flex gap-8 duration-1000 absolute md:static ${
          open ? "top-16" : "-top-60"
        } bg-red-100 px-6 `}
      >
        {routes.map((route) => (
          <Navbar key={route.id} route={route}></Navbar>
        ))}
      </ul>
    </nav>
  );
};

export default Navbars;
