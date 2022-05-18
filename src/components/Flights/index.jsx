import { useState } from "react";

import styled from "styled-components";
import FlightSearch from "./FlightSearch";
import FlightList from "./FlightList";

const Flights = () => {
  const [filters, setFilters] = useState({});
  const handleFilterFlights = (filters) => {
    setFilters(filters);
  };
  return (
    <Container>
      <FlightSearch handleFilterFlights={handleFilterFlights} />
      <div>
        <FlightList filters={filters} />
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  background-color: #c0c0c0;
  padding: 20px;
  grid-gap: 20px;
  min-height: calc(100vh - 100px);
`;
export default Flights;
