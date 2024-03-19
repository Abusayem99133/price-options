import PropTypes from "prop-types";
import Featurs from "../../Featurs/Featurs";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 rounded-md p-4 flex flex-col text-white">
      <h2 className="text-center">
        <span className="text-7xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Featurs key={index} feature={feature}></Featurs>
        ))}
      </div>
      <button className="mt-12 bg-green-600 font-bold hover:bg-green-900 w-full rounded-full p-2">
        Buy Now
      </button>
    </div>
  );
};
PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
