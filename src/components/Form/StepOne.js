import React, { useState } from 'react';
import SelectInput from './SelectInput'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import OutlinedInput from '@mui/material/OutlinedInput';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AlertComponent from '../Alert/AlertComponent';
import { validateForm } from '../../errors/errors';
import dayjs from 'dayjs';

export default function StepOne({ selections, addSelection, updateSelection, deleteSelection, nextStep }) {

  const [errors, setErrors] = useState(null);

  const handleUpdate = (index, field, value) => {
    updateSelection(index, field, value);
  };

  const handleDelete = (index) => {
    deleteSelection(index);
  };

  // Validate form before proceeding to next step
  const handleNext = () => {
    const errors = validateForm(selections);
    if (errors.length > 0) {
      setErrors(errors);
    } else {
      nextStep();
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h2>Step 1</h2>
      {errors && <AlertComponent severity="error" messages={errors} />}
      {selections.map((selection, index) => (
        <Grid container spacing={1} key={index} sx={{ mb: 5 }}>
          <Grid item xs={6} sm={6} md={2}>
            <LocalizationProvider sx={{ width: '100%' }} dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: '100%' }}
                label="Select Date"
                value={dayjs(selection.startDate)}
                onChange={(selectedDate) => handleUpdate(index, 'startDate', selectedDate)}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6} sm={6} md={2}>
            <LocalizationProvider sx={{ width: '100%' }} dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: '100%' }}
                label="Select Date"
                value={dayjs(selection.endDate)}
                onChange={(selectedDate) => handleUpdate(index, 'endDate', selectedDate)}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <SelectInput
              value={selection.valueType}
              options={['fixed', 'percentage']}
              onChange={(e) => handleUpdate(index, 'valueType', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <OutlinedInput
              sx={{ width: '100%' }}
              type="text"
              placeholder="Amount"
              value={selection.amount}
              onChange={(e) => handleUpdate(index, 'amount', e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <Button
              sx={{ height: '100%' }}
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(index)}
              fullWidth
            >
              Delete
            </Button>
          </Grid>
        </Grid>
      ))}
      <Grid container spacing={1} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Button onClick={addSelection} variant="contained" sx={{ width: '100%', height: '100%' }} startIcon={<AddIcon />}>
            Add Selection
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button onClick={handleNext} variant="outlined" sx={{ width: '100%', height: '100%' }} endIcon={<NavigateNextIcon />}>
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
