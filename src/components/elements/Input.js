import React from 'react';
import { ErrorMessage, useField } from 'formik';
import ErrorIndicator from './ErrorIndicator';

const Input = ({ label, id, ...rest }) => {
  const [field, meta] = useField(rest);
  const hasHerror = meta.touched && meta.error;

  return (
    <div className='app-form-control'>
      <label className='app-form-label' htmlFor={id}>
        {label}
      </label>
      <input className='app-form-input' {...field} {...rest} />

      {hasHerror && (
        <ErrorMessage name={field.name}>
          {(error) => <ErrorIndicator>{error}</ErrorIndicator>}
        </ErrorMessage>
      )}
    </div>
  );
};

export default Input;
