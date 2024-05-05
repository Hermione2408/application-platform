import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel, OutlinedInput, Chip } from '@mui/material';
import './DropdownWithChips.css'; 
import CrossIcon from "../../utils/images/cross-svgrepo-com.svg"
const DropdownWithChips = (props) => {
    const {allOptions,onSelect,label,updateOptions,originalOptions} = props
    // const allOptions = ['Option 1', 'Option 2', 'Option 3'];
    const [options, setOptions] = useState(allOptions); 
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedOptions(value);
        let tempOptions = [...allOptions] 
        tempOptions = allOptions.filter(option => !value.includes(option))
        setOptions(tempOptions); 
        setOpen(false);
        onSelect(value)
        updateOptions(tempOptions)

    };

    const handleDelete = (optionToDelete) => () => {
        let tempSelected = [...selectedOptions]
        tempSelected = tempSelected.filter((el)=> el != optionToDelete)
        let tempOptions = [...allOptions]
        tempOptions.push(optionToDelete)
        setSelectedOptions(tempSelected);
        setOptions(tempOptions); 
        onSelect(tempSelected)
        updateOptions(tempOptions)
    };
    const deleteAll =()=>{
        setSelectedOptions([]);
        setOptions(originalOptions); 
        onSelect([])
        updateOptions(originalOptions)
    }
    const handleClickOpen = () => {
        setOpen(true); // Open dropdown
    };

    const handleClose = () => {
        setOpen(false); // Close dropdown
    };
    return (
        <FormControl className="dropdownForm">
            <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
            <Select
                labelId="demo-multiple-chip-label"
                multiple
                open={open}
                onOpen={handleClickOpen}
                onClose={handleClose}
                value={selectedOptions}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Select Option" />}
                renderValue={(selected) => selected ?  (
                    <div style={{display:'flex',alignItems:'center'}}>
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
                    </div>
                    {selected.length >1 &&<div className='vl'>
                    <img className="crossIcon" src={CrossIcon} onClick={deleteAll}                                onMouseDown={(event) => event.stopPropagation()} />
                    </div>}
                    </div>
                ) : label}
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
