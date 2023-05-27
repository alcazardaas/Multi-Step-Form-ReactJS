import { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';

export default function StepsForm() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState([{ startDate: new Date('2022-01-01'), endDate: new Date('2022-05-05'), valueType: 'as', amount: 'as' }]);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const addSelection = () => {
    setSelections([...selections, { startDate: '', endDate: '', valueType: '', amount: '' }]);
  };

  const updateSelection = (index, field, value) => {
    console.log(`index: ${index}, field: ${field}, value: ${value}`);
    console.log(selections);
    const updatedSelections = [...selections];
    updatedSelections[index][field] = value;
    setSelections(updatedSelections);
  };

  const deleteSelection = (index) => {
    const updatedSelections = [...selections];
    updatedSelections.splice(index, 1);
    setSelections(updatedSelections);
  };

  return (
    <div>
      {step === 1 && (
        <StepOne
          selections={selections}
          addSelection={addSelection}
          updateSelection={updateSelection}
          deleteSelection={deleteSelection}
          nextStep={nextStep}
        />
      )}
      {step === 2 && <StepTwo summaryData={selections} prevStep={prevStep} />}
    </div>
  );
}
