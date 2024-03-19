import { FaCheck } from "react-icons/fa";
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div className=" " >
            <p className='flex items-center '> <FaCheck className="bg-green-600 mr-2"></FaCheck>{feature}</p>
        </div>
    );
};
 Feature.propTypes={
    feature: PropTypes.string
 }
export default Feature;