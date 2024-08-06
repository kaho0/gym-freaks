import React from "react";
import Priceoption from "./Priceoption";

const Priceoptions = () => {
  const pricingOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      features: [
        "Access to gym equipment",
        "Free group classes",
        "Locker room access",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      features: [
        "Access to gym equipment",
        "Free group classes",
        "Locker room access",
        "Sauna and steam room access",
        "One personal training session per month",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 69.99,
      features: [
        "Access to gym equipment",
        "Free group classes",
        "Locker room access",
        "Sauna and steam room access",
        "Unlimited personal training sessions",
        "Access to VIP lounge",
        "Priority class booking",
      ],
    },
    {
      id: 4,
      name: "Family Plan",
      price: 99.99,
      features: [
        "Access to gym equipment for up to 4 family members",
        "Free group classes",
        "Locker room access",
        "Sauna and steam room access",
        "Two personal training sessions per month per member",
        "Access to VIP lounge",
        "Priority class booking",
        "Childcare services",
      ],
    },
    {
      id: 5,
      name: "Student Plan",
      price: 19.99,
      features: [
        "Access to gym equipment",
        "Free group classes",
        "Locker room access",
        "Discounted personal training sessions",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h1 className="text-3xl">Best prices in the town</h1>
      <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2">
        {pricingOptions.map((option) => (
          <Priceoption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default Priceoptions;
