import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { Box } from '@mui/material';

export default function StepsForm() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState([{ startDate: '', endDate: '', valueType: '', amount: '' }])

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const addSelection = () => {
    setSelections([...selections, { startDate: '', endDate: '', valueType: '', amount: '' }])
  }

  const updateSelection = (index, field, value) => {
    const updatedSelections = [...selections]
    updatedSelections[index][field] = value
    setSelections(updatedSelections)
  }

  const deleteSelection = (index) => {
    const updatedSelections = [...selections];
    updatedSelections.splice(index, 1)
    setSelections(updatedSelections)
  }

  const clearSelections = () => {
    setSelections([{ startDate: '', endDate: '', valueType: '', amount: '' }]);
  }

  return (
    <Box sx={{ px: 1 }}>
      {step === 1 && (
        <StepOne
          selections={selections}
          addSelection={addSelection}
          updateSelection={updateSelection}
          deleteSelection={deleteSelection}
          nextStep={nextStep}
        />
      )}
      {step === 2 && <StepTwo record={selections} prevStep={prevStep} clearData={clearSelections}/>}
    </Box>
  );
}
