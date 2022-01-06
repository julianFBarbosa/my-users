import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';

import Card from '../layouts/Card';
import SocialImage from '../../assets/undraw_Mobile_login_re_9ntv.png';
import Input from '../elements/Input';

const Register = () => {
  const onSubmit = (values) => {
    console.log('onSubmit values', values);
  };

  const firstPart = useFormik({
    initialValues: {
      name: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit,
    validateOnMount: true,
    validationSchema: Yup.object({
      email: Yup.string().required('O nome é obrigatório'),
      password: Yup.string()
        .required('Você deve inserir uma senha')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          'A senha deve ter pelo menos 8 caracteres, uma letra maíuscula, uma minúscula, um número e um caractere especial.'
        ),
      repeatPassword: Yup.string()
        .required('Você deve confirmar sua senha')
        .oneOf([Yup.ref('password'), null], 'As senhas devem conincidir'),
    }),
  });

  // eslint-disable-next-line no-unused-vars
  const [addressData, setAddressData] = useState({
    country: '',
    state: '',
  });

  return (
    <Card>
      <div className='app-body'>
        <h1 className='app-form-title'>Cadastro de dados</h1>

        <div>
          <FormikProvider value={firstPart}>
            <Form>
              {Object.entries(firstStageLabels).map(([name, infos]) => (
                <Input
                  key={name}
                  label={infos.label}
                  id={name}
                  name={name}
                  type={infos.type}
                  value={infos.value}
                  shouldValidate
                />
              ))}
              <button className='app-form-button primary'>Próximo</button>
            </Form>
          </FormikProvider>
        </div>
        <Link to='/'>Voltar para o início</Link>
      </div>
      <figure className='app-banner'>
        <img className='app-home-image' src={SocialImage} alt='' />
      </figure>
    </Card>
  );
};

export default Register;
