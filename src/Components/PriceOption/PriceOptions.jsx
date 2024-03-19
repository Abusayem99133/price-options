import PriceOption from "./PriceOption2/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$30/month",
      features: [
        "Access to cardio equipment",
        "Access to weight training area",
        "Locker room access",
        "Discounts on gym merchandise",
        "Free Wi-Fi access",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: "$50/month",
      features: [
        "Access to all equipment",
        "Access to group fitness classes",
        "Personalized workout plan",
        "Towel service",
        "Sauna and steam room access",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: "$80/month",
      features: [
        "Access to all equipment and amenities",
        "Unlimited access to group and personal training sessions",
        "Nutritional counseling",
        "Complimentary drinks/snacks",
        "Priority booking for fitness classes",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl"> Best Prices in the town</h2>
      <div className="grid grid-cols-3 gap-6 ">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
