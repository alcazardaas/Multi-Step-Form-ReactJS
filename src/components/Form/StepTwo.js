import React from 'react';
import SummaryTable from '../Table/SummaryTable';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Box, Grid } from '@mui/material';

export default function StepTwo({ summaryData, prevStep }) {

  const columns = [
    { name: 'Start Date', property: 'startDate' },
    { name: 'End Date', property: 'endDate' },
    { name: 'Value Type', property: 'valueType' },
    { name: 'Amount', property: 'amount' },
  ];

  const saveData = () => {
    alert('Data saved!');
  };

  return (
    <Box>
      <h2>Step 2</h2>
      <h3>Summary</h3>
      <SummaryTable data={summaryData} columns={columns} />
      <Grid container spacing={1} sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={6} md={6}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<NavigateBeforeIcon />}
            onClick={prevStep}
            sx={{ width: '100%', height: '100%' }}
          >
            Back
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Button
            variant="contained"
            color="success"
            size="small"
            endIcon={<SaveIcon />}
            onClick={saveData}
            sx={{ width: '100%', height: '100%' }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
