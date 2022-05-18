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
      <div>
        <h1 className="section-title">Search Flights</h1>
        <FlightSearch handleFilterFlights={handleFilterFlights} />
      </div>
      <div>
        <h1 className="section-title">Flight List</h1>
        <FlightList filters={filters} />
      </div>
    </Container>
  );
};
const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  padding: 20px;
  grid-gap: 20px;
  .section-title {
    padding: 20px;
  }
`;
export default Flights;
