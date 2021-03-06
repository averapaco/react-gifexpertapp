import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
  
  const [inputValue, setInputValue] = useState('');

  const hadleInputChange = (e) => {
    setInputValue(e.target.value);    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit echo');
    if (inputValue.trim().length > 2) {
      setCategories((value) => {
        return [inputValue,...value];
      });
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit} >
      <input 
        type="text"
        value={inputValue}
        onChange={hadleInputChange}
      />
    </form>
  )   
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
}