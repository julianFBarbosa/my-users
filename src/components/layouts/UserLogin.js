import React, { useState } from 'react';
import Icon from '../elements/Icon';
import { ReactComponent as IconGitHub } from '../../assets/github-icon.svg';
import { ReactComponent as GmailGitHub } from '../../assets/gmail-icon.svg';
import { Link } from 'react-router-dom';
import Input from '../elements/Input';

const UserLogin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='app-login-form'>
      <form onSubmit={handleSubmit} className='app-form'>
        <Input
          type='text'
          label='Email, CPF ou PIS'
          id='login'
          name='login'
          value={login}
          onChange={({ target }) => setLogin(target.value)}
        />
        <Input
          label='Senha'
          id='password'
          type='password'
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
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
      </form>
    </div>
  );
};

export default UserLogin;
