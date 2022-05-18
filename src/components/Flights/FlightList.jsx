import styled from "styled-components";
import FlightItem from "./FlightItem";
import { FLIGHT_DATA } from "../../data";

const FlightList = ({ filters }) => {
  const { to, from, passangers, date } = filters;
  const filterFlights = () => {
    return FLIGHT_DATA.filter((flight) => {
      if (to && from && passangers && date) {
        return (
          flight.to === to &&
          flight.from === from &&
          flight.seatsAvailable >= passangers &&
          flight.departureDate === date
        );
      } else {
        return FLIGHT_DATA;
      }
    });
  };

  const renderFlightOptions = () => {
    const filteredList = filterFlights();
    if (filteredList.length === 0)
      return <p className="no-flights">No Flights available</p>;
    return filteredList.map((flight) => {
      return (
        <FlightItem key={flight.id} flight={flight} passangers={passangers} />
      );
    });
  };

  return (
    <Container>
      <div className="labels">
        <p>Travel Destination</p>
        <p>Date</p>
        <p>Seats Available</p>
        <p>Travel Time</p>
      </div>
      {renderFlightOptions()}
    </Container>
  );
};
const Container = styled.div`
  background-color: var(--white);
  border-radius: 30px;
  padding: 20px;
  .labels {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
  }
  .no-flights {
    text-align: center;
    padding: 20px;
  }
`;
export default FlightList;
