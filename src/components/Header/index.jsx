import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Container>
      <Link className="logo" to="/">
        <img className="logo" src={logo} alt="logo" />
        <p>Flight Search</p>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 5%;
  background-color: var(--white);
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      max-height: 80%;
    }
    p {
      font-size: 12px;
    }
  }
`;

export default Header;
