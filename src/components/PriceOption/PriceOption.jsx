
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {

    const { name, price, features } = option;
    return (
        <div className='flex flex-col bg-blue-500 rounded-md text-white p-4'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold  '>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-6'>{name}</h4>

            <div className=' flex-grow '>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
                <button className='mt-8  bg-green-600 font-bold rounded-lg w-full py-2 hover:bg-green-950'>Buy Now</button>
            </div>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.array
}
export default PriceOption;