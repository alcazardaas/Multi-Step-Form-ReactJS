import React, { useState } from 'react';
import SummaryTable from '../Table/SummaryTable';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Box, Grid, Typography } from '@mui/material';
import ModalComponent from '../Modal/ModalComponent';
import performRequest from '../../request/request';
import generateUUID from '../../utils/uuid';

export default function StepTwo({ record, prevStep, clearData }) {

  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(null)

  const clearStates = () => {
    setMessage(null)
    setSuccess(null)
  }

  const clearDataStates = () => {
    clearStates()
    prevStep()
    clearData()
  }

  const columns = [
    { name: 'Start Date', property: 'startDate' },
    { name: 'End Date', property: 'endDate' },
    { name: 'Value Type', property: 'valueType' },
    { name: 'Amount', property: 'amount' },
  ];

  // Fetch POST method to save data in http://localhost:3001/record
  const saveData = () => {
    if (record.length === 0) {
      setMessage('No data to save')
      setSuccess(false)
      return
    }

    const saveData = { record, id: generateUUID() }
    performRequest('POST', 'http://localhost:3001/records', saveData, () => {
      setSuccess(true)
      setMessage('Data saved successfully')
    }, () => {
      setSuccess(false)
      setMessage('Something went wrong, please try again')
    })
  }

  return (
    <>
      <Box>
        <Grid item>
          <Typography variant="h1" component="h1" align="center" gutterBottom>
            Summary
          </Typography>
        </Grid>
        <SummaryTable data={record} columns={columns} />
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
      {message && <ModalComponent message={message} success={success} onClearData={clearDataStates} onClose={clearStates} />}
    </>
  );
}
