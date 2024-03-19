import Navbar from "./Navbar/Navbar";

const Navbars = () => {
  const routes = [
    { id: 1, name: "Home", path: "/", exact: true },
    { id: 2, name: "About", path: "/about", exact: true },
    { id: 3, name: "Services", path: "/services", exact: true },
    { id: 4, name: "Contact", path: "/contact", exact: true },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav>
      <ul className="md:flex gap-8 justify-between">
        {routes.map((route) => (
          <Navbar key={route.id} route={route}></Navbar>
        ))}
      </ul>
    </nav>
  );
};

export default Navbars;
