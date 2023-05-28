import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectComponent = ({ value, options, onChange }) => {
  return (
    <FormControl sx={{ width: '100%' }}>
      <InputLabel id="select-label">Value type</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label="Age"
        onChange={onChange}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectComponent
