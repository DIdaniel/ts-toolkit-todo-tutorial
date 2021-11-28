import React from "react";
import { useDispatch } from "react-redux";
import { removeReservation } from "../redux/features/reservationSlice";

interface ReservationCardProps {
  name: string;
  index: number;
}

const ReservationCard: React.FC<ReservationCardProps> = ({ name, index }) => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(removeReservation(index));
  };

  return (
    <div onClick={clickHandler} className="reservation-card-container">
      {name}
    </div>
  );
};

export default ReservationCard;
