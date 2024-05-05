import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, OutlinedInput, Chip } from '@mui/material';
import './DropdownWithChips.css'; 
import CrossIcon from "../../utils/images/cross-svgrepo-com.svg"
const DropdownWithChips = () => {
    const allOptions = ['Option 1', 'Option 2', 'Option 3'];
    const [options, setOptions] = useState(allOptions); 
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedOptions(value); 
        setOptions(allOptions.filter(option => !value.includes(option))); 
        setOpen(false);

    };

    const handleDelete = (optionToDelete) => () => {
        setSelectedOptions((currentSelectedOptions) =>
            currentSelectedOptions.filter(option => option !== optionToDelete)
        );
        setOptions(currentOptions => [...currentOptions, optionToDelete].sort()); 
    };
    const deleteAll =()=>{
        setSelectedOptions([]);
    setOptions(allOptions); 
    }
    const handleClickOpen = () => {
        setOpen(true); // Open dropdown
    };

    const handleClose = () => {
        setOpen(false); // Close dropdown
    };
    return (
        <FormControl className="dropdownForm">
            <InputLabel id="demo-multiple-chip-label">Select Option</InputLabel>
            <Select
                labelId="demo-multiple-chip-label"
                multiple
                open={open}
                onOpen={handleClickOpen}
                onClose={handleClose}
                value={selectedOptions}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Select Option" />}
                renderValue={(selected) => (
                    <div className="chipsContainer">
                        {selected.map((option) => (
                               <Chip
                               key={option}
                               label={option}
                               onDelete={handleDelete(option)}
                               onMouseDown={(event) => event.stopPropagation()}
                               className="chip"
                               deleteIcon={<span className="chipDeleteIcon">&times;</span>} 
                           />
                        ))}
                    <img className="crossIcon" src={CrossIcon} onClick={deleteAll}                                onMouseDown={(event) => event.stopPropagation()} />
                    <hr />
                    </div>
                    
                )}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 48 * 4.5 + 8,
                            width: 250,
                        },
                    },
                }}
            >
                {options.filter(option => !selectedOptions.includes(option)).map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default DropdownWithChips;
