
import React, { useState } from 'react';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState(''); 

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      
      <select  style={{ backgroundColor:'blue',color:'white' }} id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select </option>
        <option value="student">Student</option>
        <option value="salaried">Salaried</option>
        <option value="business">Business</option>
      </select>

    
    </div>
  );
};

export default DropdownMenu;
