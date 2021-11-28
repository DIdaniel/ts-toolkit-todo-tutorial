import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../redux/features/customerSlice";

interface CustomerCardProps {
  id: string;
  name: string;
  food: string[];
}

const CustomerCard: React.FC<CustomerCardProps> = ({ id, name, food }) => {
  const dispatch = useDispatch();

  const [customerFoodInput, setCustomerFoodInput] = useState("");

  const clickHandler = () => {
    if (!customerFoodInput) return;

    dispatch(
      addFoodToCustomer({
        id,
        food: customerFoodInput,
      })
    );

    setCustomerFoodInput("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => {
            return <p>{food}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <button onClick={clickHandler}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
