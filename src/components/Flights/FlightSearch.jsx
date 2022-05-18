import { useState } from "react";
import styled from "styled-components";
import SelectField from "../elements/SelectField";
import { COUNTRY_CHOICES, NUM_PASSANGER_OPTIONS } from "../../data";

const initialValues = {
  from: "",
  to: "",
  passangers: "",
};

const FlightSearch = ({ handleFilterFlights }) => {
  const [formFields, setFormFields] = useState(initialValues);
  const { from, to, passangers } = formFields;
  const [errorMesage, setErrorMessage] = useState("");
  const handleFromChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormValidation = () => {
    if (!from || !to || !passangers) {
      setErrorMessage("Please enter flight choice");
      return false;
    }
    if (from === to) {
      setErrorMessage("Arrival to Destination conflict");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleSubmitForm = () => {
    const validate = handleFormValidation();
    if (validate) {
      handleFilterFlights(formFields);
    }
  };
  return (
    <Container>
      <SelectField
        name="from"
        value={from}
        label="from"
        handleFromChange={handleFromChange}
        options={COUNTRY_CHOICES}
      />
      <SelectField
        name="to"
        value={to}
        label="To"
        handleFromChange={handleFromChange}
        options={COUNTRY_CHOICES}
      />
      <SelectField
        name="passangers"
        value={passangers}
        label="passangers"
        handleFromChange={handleFromChange}
        options={NUM_PASSANGER_OPTIONS}
      />
      <ErrorMessage>{errorMesage}</ErrorMessage>
      <Button onClick={handleSubmitForm}>Search</Button>
    </Container>
  );
};
const Container = styled.div`
  background-color: var(--white);
  border-radius: 30px;
  padding: 20px;
  max-height: 55vh;
`;
const ErrorMessage = styled.p`
  text-align: center;
  color: red;
  font-size: 12px;
  padding-bottom: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  text-align: center;
  background-color: #95d2e9;
  border-radius: 30px;
  padding: 10px 20px;
  width: 200px;
  display: block;
  margin: 0 auto;
  border: none;
  color: var(--white);
`;

export default FlightSearch;
