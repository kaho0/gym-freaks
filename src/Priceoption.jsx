import PropTypes from "prop-types";
import Features from "./Features"; // Assuming this is the correct import for Feature component
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-100 rounded-md p-4 mt-5 flex flex-col">
      <h1 className="text-center">
        <span className="text-6xl font-extrabold mb-4">${price}</span>
        <span className="text-3xl">/mon</span>
      </h1>
      <h4 className="text-3xl text-center my-8">{name}</h4>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>
      <button className="bg-black p-3 w-full py-2 hover:bg-slate-600 text-white font-bold rounded-2xl mt-3 mb-4">
        Purchase{" "}
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PriceOption;
