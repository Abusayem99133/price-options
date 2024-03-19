import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const Featurs = ({ feature }) => {
  return (
    <div className="">
      <p className="flex items-center">
        <AiFillCheckCircle className="text-green-400 mr-1" />
        {feature}
      </p>
    </div>
  );
};
Featurs.propTypes = {
  feature: PropTypes.string,
};
export default Featurs;
