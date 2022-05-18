import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import styled from "styled-components";
const SelectField = ({ name, value, label, handleFromChange, options }) => {
  return (
    <SelectContainer>
      <InputLabel id="select">{label}</InputLabel>
      <Select
        labelId="select"
        value={value}
        onChange={handleFromChange}
        label="From"
        name={name}
      >
        {options.map((option, i) => {
          const { value } = option;
          return (
            <MenuItem key={i} value={value}>
              {value}
            </MenuItem>
          );
        })}
      </Select>
      {name === "passangers" ? <p className="max">max 5 passangers</p> : null}
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  margin: 20px 0;
  #select {
    text-transform: uppercase;
    font-weight: 700;
  }
  .MuiOutlinedInput-root {
    width: 100%;
  }
  .max {
    padding-top: 10px;
    font-size: 12px;
  }
`;
export default SelectField;
