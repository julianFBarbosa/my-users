import React, { useState } from 'react';
import Icon from './Icon';
import { ReactComponent as IconGitHub } from './assets/github-icon.svg';
import { ReactComponent as GmailGitHub } from './assets/gmail-icon.svg';

const UserLogin = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='app-login-form'>
      <form onSubmit={handleSubmit} className='app-form'>
        <div className='app-form-control'>
          <label className='app-form-label' htmlFor='user-login'>
            Email, CPF ou PIS
          </label>
          <input
            className='app-form-input'
            type='text'
            name='user-login'
            id='user-login'
            value={login}
            onChange={({ target }) => setLogin(target.value)}
          />
        </div>
        <div className='app-form-control'>
          <label className='app-form-label' htmlFor='user-password'>
            Senha
          </label>
          <input
            className='app-form-input'
            type='password'
            name='user-password'
            id='user-password'
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div>
          <button className='app-form-button primary'>Entrar</button>
          <a
            className='app-form-button secondary displaced-top'
            href='/cadastro'
          >
            Cadastrar
          </a>
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
