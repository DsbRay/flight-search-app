import styled from "styled-components";
import backgroundImage from "../../assets/hero-image.jpeg";
import LinkButton from "../elements/LinkButton";

const Home = () => {
  return (
    <Container>
      <LinkButton
        className="check-flights"
        url="/flights"
        text="Check Flights"
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: calc(100vh - 50px);
`;
export default Home;
