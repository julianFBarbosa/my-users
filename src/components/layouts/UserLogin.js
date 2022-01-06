import React from 'react';
import { Link } from 'react-router-dom';
import { FormikProvider, Form, useFormik } from 'formik';
import * as Yup from 'yup';

import Icon from '../elements/Icon';
import Input from '../elements/Input';
import { ReactComponent as IconGitHub } from '../../assets/github-icon.svg';
import { ReactComponent as GmailGitHub } from '../../assets/gmail-icon.svg';
import ErrorIndicator from '../elements/ErrorIndicator';

const UserLogin = () => {
  const loginData = useFormik({
    initialValues: {
      login: 'teste',
      password: '',
    },
    validationSchema: Yup.object({
      login: Yup.string().required('O campo de login não pode estar vazio'),
      password: Yup.string().required('O campo de senha não pode estar vazio'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  console.log('loginData', loginData)
  console.log('loginData.values.password', loginData.values.password);
  return (
    <div className='app-login-form'>
      <FormikProvider value={loginData}>
        <Form className='app-form'>
          <div className='app-form-control'>
            <Input
              label='Email, CPF ou PIS'
              id='login'
              type='text'
              name='login'
              value={loginData.values.login}
              onChange={loginData.handleChange}
              onBlur={loginData.handleBlur}
            />
          </div>
          <div className='app-form-control'>
            <Input
              label='Senha'
              id='password'
              type='password'
              name='password'
              value={loginData.values.password}
              onChange={loginData.handleChange}
              onBlur={loginData.handleBlur}
            />
          </div>
          <div>
            <button className='app-form-button primary'>Entrar</button>
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
