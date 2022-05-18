import { useState } from "react";
import styled from "styled-components";
import TextInput from "../elements/TextInput";

const PersonalDetails = ({ handleFormSubmit, seats, seatsAvailable }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    passangers: seats || "",
  };

  const [formFields, setFormFields] = useState(initialValues);
  const { firstName, lastName, email, passangers } = formFields;
  const [errorMessage, setErrorMessage] = useState("");

  const handlePassangersCheck = () => {
    if (seatsAvailable < passangers || passangers === 0) {
      setErrorMessage("Seat Choices not available");
      return false;
    } else if (passangers > 5) {
      setErrorMessage("Max 5 seats per order");
      return false;
    }
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const seatCheck = handlePassangersCheck();
    if (seatCheck) {
      handleFormSubmit(formFields);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="text"
          handleChange={handleChange}
          value={firstName}
          name="firstName"
        />
        <TextInput
          type="text"
          handleChange={handleChange}
          value={lastName}
          name="lastName"
        />
        <TextInput
          type="email"
          handleChange={handleChange}
          value={email}
          name="email"
        />
        <TextInput
          type="number"
          required
          handleChange={handleChange}
          value={passangers}
          name="passangers"
        />
        <Error>{errorMessage}</Error>
        <button type="submit">Book Flight</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  border-radius: 30px;
  background-color: var(--white);
  button {
    padding: 10px 20px;
    background-color: var(--jaggedIce);
    border: none;
    border-radius: 30px;
    display: block;
    margin: auto;
    color: var(--white);
    cursor: pointer;
    transition: opacity 0.25s ease;
    &:hover {
      opacity: 0.8;
    }
  }
`;
const Error = styled.p`
  text-align: center;
  color: var(--redBerry);
  font-size: 12px;
  padding-bottom: 5px;
`;
export default PersonalDetails;
