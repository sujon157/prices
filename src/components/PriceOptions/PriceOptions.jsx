import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions =
        [
            {
                "id": 1,
                "name": "Basic Membership",
                "price": 40,
                "features": [
                    "Access to cardio equipment",
                    "Access to weightlifting area",
                    "Locker usage",
                    "24/7 access",
                    "Fitness assessment",
                    "Discounts on gym merchandise",
                   
                    "Discounts on gym merchandise",
                    "Discounts on gym merchandise"
                  
                ]
            },
            {
                "id": 2,
                "name": "Standard Membership",
                "price": 50,
                "features": [
                    "Access to cardio equipment",
                    "Access to weightlifting area",
                    "Group fitness classes",
                    "Locker usage",
                    "24/7 access",
                    "Fitness assessment",
                  
                    "Discounts on gym merchandise",
                    "Towel service"
                ]
            },
            {
                "id": 3,
                "name": "Premium Membership",
                "price": 60,
                "features": [
                    "Access to cardio equipment",
                    "Access to weightlifting area",
                    "Group fitness classes",
                    "Access to sauna and steam room",
                    "Personal training session (1/month)",
                    "Locker usage",
                    "24/7 access",
                    "Fitness assessment",
                  
                ]
            }
        ]


    return (
        <div className="mt-12">
        <h2  className="text-6xl font-bold text-purple-700">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;