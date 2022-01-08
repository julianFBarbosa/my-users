import React from 'react';
import { ErrorMessage, useField } from 'formik';
import ErrorIndicator from './ErrorIndicator';

const Input = ({
  label,
  id,
  // type,
  // value,
  // onChange,
  // shouldValidate = false,
  ...rest
}) => {
  const [field, meta] = useField(rest);
  const hasHerror = meta.touched && meta.error;
  console.log('rest', rest);
  console.log('rest.name', rest.name);
  console.log('meta', meta);
  console.log('field', field);

  return (
    <div className='app-form-control'>
      <label className='app-form-label' htmlFor={id}>
        {label}
      </label>
      <input
        // type={type}
        // id={id}
        // onChange={onChange}
        // name={name}
        // value={value}
        className='app-form-input'
        {...field}
        {...rest}
      />

      {hasHerror && (
        <ErrorMessage name={field.name}>
          {(error) => <ErrorIndicator>{error}</ErrorIndicator>}
        </ErrorMessage>
      )}
    </div>
  );
};

export default Input;
