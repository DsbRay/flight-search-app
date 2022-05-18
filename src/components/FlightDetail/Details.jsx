import styled from "styled-components";

const Details = ({ flight }) => {
  const {
    from,
    to,
    departureTime,
    arrivalTime,
    departureDate,
    seatsAvailable,
  } = flight;
  return (
    <Container>
      <div className="detail">
        <p className="label">Leaving Destination:</p>
        <p>{from}</p>
      </div>
      <div className="detail">
        <p className="label">Arrival Destination:</p>
        <p>{to}</p>
      </div>
      <div className="detail">
        <p className="label">Travel Time:</p>
        <p>
          {departureTime} - {arrivalTime}
        </p>
      </div>
      <div className="detail">
        <p className="label">Departure Date:</p>
        <p>{departureDate}</p>
      </div>
      <div className="detail">
        <p className="label">Seats Available:</p>
        <p>{seatsAvailable}</p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 20px;
  border-radius: 30px;
  background-color: var(--white);
  .detail {
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    align-items: baseline;
    p {
      font-size: 20px;
      &.label {
        font-size: 24px;
      }
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
export default Details;
