import PropTypes from "prop-types";
import { FaCircleCheck } from "react-icons/fa6";
const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center  p-2">
        <FaCircleCheck className="mr-2"></FaCircleCheck>
        {feature}
      </p>
    </div>
  );
};
Features.propTypes = {
  feature: PropTypes.object,
};
export default Features;
