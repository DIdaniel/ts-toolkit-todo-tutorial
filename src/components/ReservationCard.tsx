import React from "react";

interface ReservationCardProps {
  name: string;
}

const ReservationCard: React.FC<ReservationCardProps> = ({ name }) => {
  return <div className="reservation-card-container">{name}</div>;
};

export default ReservationCard;
