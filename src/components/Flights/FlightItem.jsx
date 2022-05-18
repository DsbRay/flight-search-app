import styled from "styled-components";
import { Link } from "react-router-dom";

const FlightItem = ({ flight, passangers }) => {
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
    <Container>
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
      <Link state={{ passangers: passangers }} to={`/flights/${id}`}>
        Select Flight
      </Link>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--jaggedIce);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  margin: 5px 0;
  padding: 10px;
  align-items: center;
  .flex {
    display: flex;
    gap: 10px;
  }
  a {
    background-color: var(--white);
    text-align: center;
    border-radius: 25px;
    padding: 5px;
    border: 1px solid var(--black);
    transition: opacity 0.25s ease;
    &:hover {
      opacity: 0.8;
    }
  }
`;
export default FlightItem;
