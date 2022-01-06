import React from 'react';
import { ErrorMessage, useField } from 'formik';
import ErrorIndicator from './ErrorIndicator';

const Input = ({
  name,
  label,
  id,
  type,
  value,
  onChange,
  shouldValidate = false,
  ...rest
}) => {
  console.log('value', value)
  const [field, meta] = useField();
  console.log('field', field);
  const hasAnErrorAndHasBeenTouched = !!meta.error && meta.touched;
  const propsWhenShouldValidateProps = {
    isInvalid: hasAnErrorAndHasBeenTouched,
  };

  return (
    <div
      className='app-form-control'
      {...(shouldValidate ? propsWhenShouldValidateProps : '')}
    >
      <label className='app-form-label' htmlFor={id}>
        {label}
      </label>
      <input
        className='app-form-input'
        type={type}
        id={id}
        onChange={onChange}
        name={name}
        value={value}
        {...field}
        {...rest}
      />
      {shouldValidate && (
        <ErrorMessage name={name}>
          {(error) => <ErrorIndicator>{error}</ErrorIndicator>}
        </ErrorMessage>
      )}
    </div>
  );
};

export default Input;
