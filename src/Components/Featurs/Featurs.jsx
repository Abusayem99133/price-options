import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const Featurs = ({ feature }) => {
  return (
    <div>
      <p>
        <AiFillCheckCircle />
        {feature}
      </p>
    </div>
  );
};
Featurs.propTypes = {
  feature: PropTypes.string,
};
export default Featurs;
