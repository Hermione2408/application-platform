import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './Dropdown.css'
import CrossIcon from "../../utils/images/cross-svgrepo-com.svg"

const Dropdown = (props) => {
    const {allOptions,onSelect,label,updateOptions,originalOptions} = props

    const [options, setOptions] = useState(allOptions); 
    const [selectedOptions, setSelectedOptions] = useState("");

  const handleChange = (event) => {
    setSelectedOptions(event.target.value); 
    onSelect(event.target.value)
  };
  const deleteAll = () => {
    setSelectedOptions("");
    onSelect("")
};
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedOptions}
        label={label}
        onChange={handleChange}
        renderValue={  (selected)=>     <div>   {selected}   <img className="crossIcon" src={CrossIcon} onClick={deleteAll}                                onMouseDown={(event) => event.stopPropagation()} /> </div>       
    }
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
