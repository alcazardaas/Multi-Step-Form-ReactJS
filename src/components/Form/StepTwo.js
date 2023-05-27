import React from 'react';
import SummaryTable from '../Table/SummaryTable';

export default function StepTwo({ summaryData, prevStep }) {

  const columns = [
    { name: 'Start Date', property: 'startDate' },
    { name: 'End Date', property: 'endDate' },
    { name: 'Value Type', property: 'valueType' },
    { name: 'Amount', property: 'amount' },
  ];

  return (
    <div>
      <h2>Step 2</h2>
      <h3>Summary</h3>
      <ul>
        <SummaryTable data={summaryData} columns={columns} />
      </ul>
      <button onClick={prevStep}>Previous</button>
    </div>
  );
}
