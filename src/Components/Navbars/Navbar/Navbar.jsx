import PropTypes from "prop-types";
const Navbar = ({ route }) => {
  return (
    <li className="hover:bg-orange-300 p-2">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Navbar.propTypes = {
  route: PropTypes.object,
};
export default Navbar;
