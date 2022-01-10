import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import Card from '../layouts/Card';
import SocialImage from '../../assets/undraw_Mobile_login_re_9ntv.png';
import Input from '../elements/Input';
import { registerUser } from '../../utils/firebaseFunctions';
import ErrorIndicator from '../elements/ErrorIndicator';

const Profile = () => {
  const [error, setError] = useState(false);
  const onSubmit = async (values) => {
    const { email, password } = values;
    const registerRequest = await registerUser(email, password);
    console.log('registerRequest', registerRequest);

    if (registerRequest.error) setError(`${registerRequest.message}`);
    console.log('error', error);
  };
  const registerForm = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      email: Yup.string().required('O e-mail é obrigatório'),
      password: Yup.string().required('Você deve inserir uma senha'),
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   'A senha deve ter pelo menos 8 caracteres, uma letra maíuscula, uma minúscula, um número e um caractere especial.'
      // ),
      repeatPassword: Yup.string()
        .required('Você deve confirmar sua senha')
        .oneOf([Yup.ref('password'), null], 'As senhas devem conincidir'),
    }),
    onSubmit,
  });

  return (
    <Card>
      <div className='app-body'>
        <h1 className='app-form-title'>Cadastro de usuário</h1>

        <FormikProvider value={registerForm}>
          <Form>
            <Input
              label='E-mail'
              id='email'
              name='email'
              type='email'
              value={registerForm.values.email}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleChange}
            />
            <Input
              label='Senha'
              id='password'
              name='password'
              type='password'
              value={registerForm.values.password}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleChange}
            />
            <Input
              label='Repita a senha'
              id='repeatPassword'
              name='repeatPassword'
              type='password'
              value={registerForm.values.repeatPassword}
              onChange={registerForm.handleChange}
              onBlur={registerForm.handleChange}
            />
            <button type='submit' className='app-form-button primary'>
              Cadastrar
            </button>
            {error && <ErrorIndicator>{error}</ErrorIndicator>}
          </Form>
        </FormikProvider>
        <Link to='/' className='mt-auto'>
          Voltar para o início
        </Link>
      </div>
      <figure className='app-banner'>
        <img className='app-home-image' src={SocialImage} alt='' />
      </figure>
    </Card>
  );
};

export default Profile;
