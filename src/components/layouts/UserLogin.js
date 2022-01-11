import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormikProvider, Form, useFormik } from 'formik';
import * as Yup from 'yup';

import Icon from '../elements/Icon';
import Input from '../elements/Input';
import { ReactComponent as IconGitHub } from '../../assets/github-icon.svg';
import { ReactComponent as GmailGitHub } from '../../assets/gmail-icon.svg';
import { loginUser } from '../../utils/firebaseFunctions';
import ErrorIndicator from '../elements/ErrorIndicator';

const UserLogin = () => {
  const [error, setError] = useState(false);
  // const onSubmit = (values) => {
  //   const { name, email, password } = values;
  //   const loginUser = loginUser(name, email, password);
  //   console.log('loginUser', loginUser);

  //   if (loginUser.error) setError(`${loginUser.message}`);
  //   console.log('error', error);
  // };

  const onSubmit = async (values) => {
    const { login, password } = values;
    const registerRequest = await loginUser(login, password);
    console.log('registerRequest', registerRequest);

    if (registerRequest.error) setError(`${registerRequest.message}`);
  };
  const loginData = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema: Yup.object({
      login: Yup.string().required('O campo de login não pode estar vazio'),
      password: Yup.string().required('O campo de senha não pode estar vazio'),
    }),
    onSubmit,
  });

  return (
    <div className='app-login-form'>
      <FormikProvider value={loginData}>
        <Form className='app-form'>
          <Input
            label='Email, CPF ou PIS'
            id='login'
            type='text'
            name='login'
            value={loginData.values.login}
            onChange={loginData.handleChange}
            onBlur={loginData.handleBlur}
          />
          <Input
            label='Senha'
            id='password'
            type='password'
            name='password'
            value={loginData.values.password}
            onChange={loginData.handleChange}
            onBlur={loginData.handleBlur}
          />
          <div>
            {error && <ErrorIndicator>{error}</ErrorIndicator>}
            <button className='app-form-button primary' type='submit'>
              Entrar
            </button>
            <Link
              className='app-form-button secondary displaced-top'
              to='/cadastro'
            >
              Cadastrar
            </Link>
            <p className='app-form-separator'>Ou entrar com</p>
            <div className='app-icon-container'>
              <Icon Icon={IconGitHub} href='/login/github' text='Github' />
              <Icon Icon={GmailGitHub} href='/login/gmail' text='Gmail' />
            </div>
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};

export default UserLogin;
