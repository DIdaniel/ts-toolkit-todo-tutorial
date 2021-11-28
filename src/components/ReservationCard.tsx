import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../redux/features/reservationSlice";
import { addCustomer } from "../redux/features/customerSlice";
import { v4 as uuid } from "uuid";

interface ReservationCardProps {
  name: string;
  index: number;
}

const ReservationCard: React.FC<ReservationCardProps> = ({ name, index }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeReservation(index));
    dispatch(
      addCustomer({
        id: uuid(),
        name,
        food: [],
      })
    );
  };

  return (
    <div onClick={clickHandler} className="reservation-card-container">
      {name}
    </div>
  );
};

export default ReservationCard;
