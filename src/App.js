import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation";
import { Home, Flights, FlightDetail } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/flights/:id" element={<FlightDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
