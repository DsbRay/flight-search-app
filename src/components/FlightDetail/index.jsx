import { useParams } from "react-router-dom";
import { FLIGHT_DATA } from "../../data";
const FlightDetail = () => {
  const { id } = useParams();
  const flightData = FLIGHT_DATA.find(
    (flight) => flight.id.toString() === id.toString()
  );
  const {
    from,
    to,
    departureTime,
    arrivalTime,
    departureDate,
    seatsAvailable,
  } = flightData;
  return (
    <div>
      <div className="detail">
        <p className="label">Leaving Destination:</p>
        <p>{from}</p>
      </div>
      <div className="detail">
        <p className="label">Arrival Destination</p>
        <p>{to}</p>
      </div>
      <div className="detail">
        <p className="label">Travel Time</p>
        <p>
          {departureTime} - {arrivalTime}
        </p>
      </div>
      <div className="detail">
        <p className="label">Departure Date</p>
        <p>{departureDate}</p>
      </div>
      <div className="detail">
        <p className="label">Seats Available</p>
        <p>{seatsAvailable}</p>
      </div>
    </div>
  );
};

export default FlightDetail;
