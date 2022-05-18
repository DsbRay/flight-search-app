import { useLocation } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";
import LinkButton from "../elements/LinkButton";

const Ticket = () => {
  const location = useLocation();
  const { flightData, personalData } = location.state;
  return (
    <Container>
      <h1>Flight has been booked</h1>

      <TicketContainer>
        <div className="header">
          <img src={logo} alt="logo" />
          <h2>Flight Ticket</h2>
        </div>
        <div className="list-block">
          <div>
            <div className="list-item">
              <h3>Leaving:</h3>
              <p>{flightData.from}</p>
            </div>
            <div className="list-item">
              <h3>Arrival:</h3>
              <p>{flightData.to}</p>
            </div>
            <div className="list-item">
              <h3>Date:</h3>
              <p>{flightData.departureDate}</p>
            </div>
            <div className="list-item">
              <h3>Time:</h3>
              <p>
                {flightData.departureTime} - {flightData.arrivalTime}
              </p>
            </div>
          </div>
          <div>
            <div className="list-item">
              <h3>Name:</h3>
              <p>{personalData.firstName}</p>
            </div>
            <div className="list-item">
              <h3>Surname:</h3>
              <p>{personalData.lastName}</p>
            </div>
            <div className="list-item">
              <h3>Email:</h3>
              <p>{personalData.email}</p>
            </div>
            <div className="list-item">
              <h3>Seats Booked:</h3>
              <p>{personalData.passangers}</p>
            </div>
          </div>
        </div>
        <LinkButton className="default" url="/" text="Back Home" />
      </TicketContainer>
    </Container>
  );
};
const Container = styled.div`
  padding: 20px;
  h1 {
    padding-bottom: 20px;
  }
`;
const TicketContainer = styled.div`
  max-width: 50vw;
  background-color: var(--white);
  border-radius: 30px;
  padding: 20px;
  .list-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 30px;
    .list-item {
      margin-bottom: 20px;
    }
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    img {
      max-height: 50px;
    }
  }
  button {
    border: none;
    background-image: red;
    padding: 10px 20px;
    border-radius
  }
`;
export default Ticket;
