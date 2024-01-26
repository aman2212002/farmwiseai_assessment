// AddedFieldsTable.js
import React from 'react';

const AddedFieldsTable = ({ data }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>No</th>
          <th>Field Name</th>
          <th>Field Type</th>
          <th>Field Data Type</th>
          <th>Field Validation</th>
          <th>Field Data</th>
          <th>Is Mandatory</th>
        </tr>
      </thead>
      <tbody>
        {data.map((field, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{field.fieldDisplayName}</td>
            <td>{field.fieldType}</td>
            <td>{field.fieldDataType}</td>
            <td>{field.fieldType === 'Date Picker' ? `${field.minDate} to ${field.maxDate}` : 'N/A'}</td>
            <td>{field.fieldData}</td>
            <td>{field.isMandatory}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AddedFieldsTable;
