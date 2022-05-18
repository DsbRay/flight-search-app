import styled from "styled-components";
import TextField from "@mui/material/TextField";

const TextInput = ({ type, handleChange, value, name }) => {
  return (
    <InputContainer>
      <TextField
        id="standard-basic"
        label={name}
        variant="standard"
        type={type}
        required
        onChange={handleChange}
        value={value}
        name={name}
        fullWidth
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  margin-bottom: 20px;
`;
export default TextInput;
