// DynamicForm.js
import React from 'react';

const DynamicForm = ({ fieldsData }) => {
  return (
    <form>
      {fieldsData.map((field, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <label>{field.fieldDisplayName}:</label>
          {field.fieldDataType === 'Date' ? (
            <input type="date" />
          ) : field.fieldDataType === 'Number' ? (
            <input type="number" />
          ) : field.fieldDataType === 'Dropdown' ? (
            <select>
              {field.fieldData.split(' ').map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input type="text" />
          )}
          {field.isMandatory === 'Yes' && <span style={{ color: 'red' }}>*</span>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
