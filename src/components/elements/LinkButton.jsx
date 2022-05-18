import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = ({ className = "", url, text }) => {
  return (
    <Button className={className} to={url}>
      {text}
    </Button>
  );
};

const Button = styled(Link)`
  background-color: var(--jaggedIce);
  padding: 20px 50px;
  border: none;
  color: var(--white);
  border-radius: 30px;
  transition: opacity 0.2s ease;
  &.default {
    padding: 10px 20px;
  }
  &.check-flights {
    background-color: var(--redBerry);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    text-transform: uppercase;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export default LinkButton;
