import styled from "styled-components";
import { Link } from "react-router-dom";

const FlightItem = ({ flight }) => {
  const {
    id,
    from,
    to,
    departureDate,
    seatsAvailable,
    departureTime,
    arrivalTime,
  } = flight;
  return (
    <Container to={`/flights/${id}`}>
      <div>
        <p>{from}</p>
        to
        <p>{to}</p>
      </div>
      <p>{departureDate}</p>
      <p>{seatsAvailable}</p>
      <div className="flex">
        <p>{departureTime}</p> - <p>{arrivalTime}</p>
      </div>
    </Container>
  );
};

const Container = styled(Link)`
  background-color: #c8e3ed;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 5px 0;
  padding: 10px;
  align-items: center;
  transition: opacity 0.25s ease;
  .flex {
    display: flex;
    gap: 10px;
  }
  &:hover {
    opacity: 0.8;
  }
`;
export default FlightItem;
