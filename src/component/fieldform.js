// FieldForm.js
import React, { useState } from 'react';

const FieldForm = ({ fieldType, onClose, onSubmit }) => {
  const [fieldDisplayName, setFieldDisplayName] = useState('');
  const [fieldDataType, setFieldDataType] = useState('String');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [maxLength, setMaxLength] = useState('');
  const [isMandatory, setIsMandatory] = useState('No');
  const [fieldData, setFieldData] = useState('');

  const handleSubmit = () => {
    // Validate and submit the form data
    if (onSubmit) {
      onSubmit({
        fieldType,
        fieldDisplayName,
        fieldDataType,
        minDate,
        maxDate,
        maxLength,
        isMandatory,
        fieldData,
      });

      // Reset form fields
      setFieldDisplayName('');
      setFieldDataType('String');
      setMinDate('');
      setMaxDate('');
      setMaxLength('');
      setIsMandatory('No');
      setFieldData('');
    }

    // Close the form
    onClose();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px', alignItems: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        <label>
          Field Display Name:
          <input type="text" value={fieldDisplayName} onChange={(e) => setFieldDisplayName(e.target.value)} />
        </label>
      </div>
      <div style={{ marginRight: '10px' }}>
        <label>
          Field Data Type:
          <select value={fieldDataType} onChange={(e) => setFieldDataType(e.target.value)}>
            <option value="String">String</option>
            <option value="Number">Number</option>
            <option value="Date">Date</option>
          </select>
        </label>
      </div>
      {fieldType === 'Date Picker' ? (
        <div  style={{ marginRight: '10px',textAlign:'center' }}>
          <label>Date Range Validation</label>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' , marginRight: '10px' }}>
          <label>
            Min Date:
            <input type="date" value={minDate} onChange={(e) => setMinDate(e.target.value)} />
          </label>
          <br />
          <label>
            Max Date:
            <input type="date" value={maxDate} onChange={(e) => setMaxDate(e.target.value)} />
          </label>
          </div>
        </div>
      ) : (
        <div style={{ marginRight: '10px' }}>
          <label>
            Field Max Length Allowed:
            <input type="text" value={maxLength} onChange={(e) => setMaxLength(e.target.value)} />
          </label>
        </div>
      )}
      <div style={{ marginRight: '10px' }}>
        <label>
          Is Mandatory:
          <select value={isMandatory} onChange={(e) => setIsMandatory(e.target.value)}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>
      </div>
      <div style={{ marginRight: '10px' }}>
        <label>
          Field Data:
          <input type="text" value={fieldData} onChange={(e) => setFieldData(e.target.value)} />
        </label>
      </div>
      <button onClick={handleSubmit}>Confirm</button>
    </div>
  );
};

export default FieldForm;
