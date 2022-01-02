import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../layouts/Card';

import SocialImage from '../../assets/undraw_Mobile_login_re_9ntv.png';
import Input from '../elements/Input';

const Register = () => {
  const [personalData, setPersonalData] = useState({
    name: {
      value: '',
      label: 'Nome',
      type: 'text',
    },
    email: {
      value: '',
      label: 'E-mail',
      type: 'email',
    },
    cpf: {
      value: '',
      label: 'CPF',
      type: 'text',
    },
    pis: {
      value: '',
      label: 'PIS',
      type: 'number',
    },
    password: {
      value: '',
      label: 'Senha',
      type: 'password',
    },
    repeatPassword: {
      value: '',
      label: 'Repita a senha',
      type: 'password',
    },
  });

  // eslint-disable-next-line no-unused-vars
  const [addressData, setAddressData] = useState({
    country: '',
    state: '',
    city: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
  });

  const handleChange = ({ target }) => {
    const { name, value, id } = target;
    const actualObject = personalData[id];

    const updateData = {
      ...personalData,
      [name]: {
        ...actualObject,
        value,
      },
    };

    setPersonalData(updateData);
  };

  return (
    <Card>
      <div className='app-body'>
        <p className=''>Cadastro de dados</p>

        <div>
          {Object.entries(personalData).map(([name, infos]) => (
            <Input
              key={name}
              label={infos.label}
              id={name}
              name={name}
              type={infos.type}
              value={infos.value}
              onChange={handleChange}
            />
          ))}
          <button className='app-form-button primary'>Próximo</button>
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
