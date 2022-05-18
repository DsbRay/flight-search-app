import { useParams, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Details from "./Details";
import PersonalDetails from "./PersonalDetails";
import { FLIGHT_DATA } from "../../data";

const FlightDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { passangers } = location.state;
  const { id } = useParams();
  const flightData = FLIGHT_DATA.find(
    (flight) => flight.id.toString() === id.toString()
  );
  const handleFormSubmit = (personalData) => {
    navigate("/flight-ticket", {
      state: { flightData: flightData, personalData: personalData },
    });
  };
  return (
    <Container>
      <div>
        <h1>Flight Details</h1>
        <Details flight={flightData} />
      </div>
      <div>
        <h1>Personal Details</h1>
        <PersonalDetails
          handleFormSubmit={handleFormSubmit}
          seats={passangers}
          seatsAvailable={flightData.seatsAvailable}
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr;
  padding: 20px;
  grid-gap: 50px;
  h1 {
    padding: 20px;
  }
`;
export default FlightDetail;
