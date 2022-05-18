import { useState } from "react";
import styled from "styled-components";
import SelectField from "../elements/SelectField";
import { COUNTRY_CHOICES, NUM_PASSANGER_OPTIONS } from "../../data";

const initialValues = {
  from: "",
  to: "",
  passangers: "",
  date: "",
};

const FlightSearch = ({ handleFilterFlights }) => {
  const [formFields, setFormFields] = useState(initialValues);
  const { from, to, passangers, date } = formFields;
  const [errorMesage, setErrorMessage] = useState("");
  const handleFromChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleFormValidation = () => {
    if (!from || !to || !passangers || !date) {
      setErrorMessage("Please enter flight details");
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
      <DatePicker>
        <label>Travel date</label>
        <input
          type="date"
          name="date"
          onChange={handleFromChange}
          value={date}
        />
      </DatePicker>
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
`;
const ErrorMessage = styled.p`
  text-align: center;
  color: var(--redBerry);
  font-size: 12px;
  padding-bottom: 5px;
`;

const Button = styled.button`
  cursor: pointer;
  text-align: center;
  background-color: var(--jaggedIce);
  border-radius: 30px;
  padding: 10px 20px;
  width: 200px;
  display: block;
  margin: 0 auto;
  border: none;
  color: var(--white);
`;
const DatePicker = styled.div`
  label {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  input {
    width: 100%;
    padding: 15px;
    font-size: 20px;
    border: 1px solid #0000003b;
    color: rgba(0, 0, 0, 0.6);
    border-radius: 2px;
  }
`;
export default FlightSearch;
