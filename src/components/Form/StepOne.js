import React from 'react';
import SelectInput from './SelectInput'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import OutlinedInput from '@mui/material/OutlinedInput';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function StepOne({ selections, addSelection, updateSelection, deleteSelection, nextStep }) {
  const handleUpdate = (index, field, value) => {
    updateSelection(index, field, value);
  };

  const handleDelete = (index) => {
    deleteSelection(index);
  };

  return (
    <Box>
      <h2>Step 1</h2>
      {selections.map((selection, index) => (
        <Box key={index} sx={{ marginY: 2 }}>
          <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ marginX: 1, marginY: 1,
            '@media (max-width: 600px)': {
              width: '100%',
              display: 'block'
            }
          }} >
            <DatePicker
              label="Select Date"
              value={dayjs(selection.startDate)}
              onChange={(e) => handleUpdate(index, 'startDate', e.target.value)} />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs} sx={{ marginX: 1, marginY: 1,
            '@media (max-width: 600px)': {
              width: '100%',
              display: 'block'
            }
          }}>
            <DatePicker
              label="Select Date"
              value={dayjs(selection.endDate)}
              onChange={(e) => handleUpdate(index, 'endDate', e.target.value)} />
          </LocalizationProvider>
          <SelectInput
            sx={{ marginX: 1, marginY: 1,
              '@media (max-width: 600px)': {
                width: '100%',
                display: 'block'
              }
            }}
            value={selection.valueType}
            options={['fixed', 'percentage']}
            onChange={(e) => handleUpdate(index, 'valueType', e.target.value)}
          />
          <OutlinedInput
            sx={{ marginX: 1, marginY: 1,
              '@media (max-width: 600px)': {
                width: '100%',
                display: 'block'
              }
            }}
            type="text"
            placeholder="Amount"
            value={selection.amount}
            onChange={(e) => handleUpdate(index, 'amount', e.target.value)}
          />
          <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => handleDelete(index)} sx={{ marginX: 1, marginY: 1,
            '@media (max-width: 600px)': {
              width: '100%',
              display: 'block'
            }
          }}>
            Delete
          </Button>
        </Box>
      ))}
      <Button onClick={addSelection} variant="contained" sx={{ m: 2 }} >Add Selection</Button>
      <Button onClick={nextStep} variant="outlined">Next</Button>
    </Box>
  );
}
