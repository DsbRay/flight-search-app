import styled from "styled-components";
import FlightItem from "./FlightItem";
import { FLIGHT_DATA } from "../../data";
const FlightList = ({ filters }) => {
  const { to = "", from = "", passangers = 0 } = filters;

  const filterFlights = () => {
    return FLIGHT_DATA.filter((flight) => {
      if (to && from && passangers) {
        return (
          flight.to === to &&
          flight.from === from &&
          flight.seatsAvailable >= passangers
        );
      } else {
        return FLIGHT_DATA;
      }
    });
  };

  const renderFlightOptions = () => {
    const filteredList = filterFlights();
    return filteredList.map((flight) => {
      return <FlightItem key={flight.id} flight={flight} />;
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
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export default FlightList;
