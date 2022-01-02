import React from 'react';

const Input = ({ label, id, type, value, onChange, ...props }) => {
  return (
    <div className='app-form-control'>
      <label className='app-form-label' htmlFor={id}>
        {label}
      </label>
      <input
        className='app-form-input'
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
