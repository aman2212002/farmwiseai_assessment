// AddFieldButton.js
import React, { useState } from 'react';
import SelectedFieldTypeMenu from './selectedfieldmenu';
import FieldForm from './fieldform';
import AddedFieldsTable from './table';
import DynamicForm from './dynamicform';

const AddFieldButton = () => {
  const [selectedFieldType, setSelectedFieldType] = useState('');
  const [isMenuEnabled, setMenuEnabled] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isTableVisible, setTableVisible] = useState(false);
  const [isDynamicFormVisible, setDynamicFormVisible] = useState(false);

  const handleButtonClick = () => {
    console.log('Add Field clicked!');
    setSelectedFieldType('');
    setMenuEnabled(true);
    setTableVisible(true);
    setDynamicFormVisible(false);
  };

  const handleFieldTypeSelect = (value) => {
    console.log('Selected Field Type:', value);
    setSelectedFieldType(value);
  };

  const handleFormSubmit = (formData) => {
    // Check if the number of fields in the table is less than 4
    if (tableData.length < 4) {
      // If the selected field type is "Date Picker," set the field data type to "Date"
      if (selectedFieldType === 'Date Picker') {
        formData.fieldDataType = 'Date';
      }

      // Handle form submission and update table data
      setTableData([...tableData, formData]);
      setSelectedFieldType('');
      setMenuEnabled(false);  // Reset the selected field menu
      setDynamicFormVisible(false);
    } else {
      // Show an alert if trying to add more than 4 fields
      alert('Cannot add more than 4 fields.');
    }
  };

  const handleConfirm = () => {
    // Handle the confirm action, you can perform further actions here
    console.log('Confirm button clicked!');
    setDynamicFormVisible(true);
  };

  const handleReset = () => {
    // Handle the reset action, you can reset the table or form fields here
    console.log('Reset button clicked!');
    setTableData([]);
    setMenuEnabled(false);
    setSelectedFieldType('');
    setDynamicFormVisible(false);
  };

  return (
    <div>
      <div style={{ marginRight: '10px' }}>
        <button onClick={handleButtonClick}>
          Add Field
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        {isMenuEnabled && (
          <div style={{ marginRight: '10px' }}>
            <SelectedFieldTypeMenu isEnabled={!selectedFieldType} onSelect={handleFieldTypeSelect} />
          </div>
        )}
        {selectedFieldType && (
          <div style={{ marginLeft: '10px' }}>
            <FieldForm
              fieldType={selectedFieldType}
              onClose={() => setSelectedFieldType('')}
              onSubmit={handleFormSubmit}
            />
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {isTableVisible && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <AddedFieldsTable data={tableData} />
            <div style={{ marginTop: '10px' }}>
              <button onClick={handleConfirm}>Confirm</button>
              <button onClick={handleReset}>Reset</button>
            </div>
          </div>
        )}
        {isDynamicFormVisible && (
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <DynamicForm fieldsData={tableData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddFieldButton;
