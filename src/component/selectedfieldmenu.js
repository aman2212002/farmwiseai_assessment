// SelectedFieldTypeMenu.js
import React from 'react';

const SelectedFieldTypeMenu = ({ isEnabled, onSelect }) => {
  const options = ['Text Box', 'Dropdown', 'Date Picker'];

  return (
    <select style={{ marginTop: '40px' }} disabled={!isEnabled} onChange={(e) => onSelect(e.target.value)}>
      <option value="" disabled selected>Select Field Type</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectedFieldTypeMenu;
