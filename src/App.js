import React from 'react';
import UserLogin from './UserLogin.js';
import SocialImage from './assets/undraw_Social_dashboard_re_ocbd.png';
import 'normalize.css';
import './style/reset.css';
import './style/app.scss';

function App() {
  const isLogged = false;
  const user = 'Fulano';

  return (
    <div className='app-wrapper'>
      <div className='app-content'>
        <div className='app-body'>
          {isLogged ? (
            <div className='app-body-content welcome'>
              <h1 className='app-form-title'>Olá, {user}!</h1>
              <a className='app-form-button primary' href='/editar'>
                Editar meus dados
              </a>
              <a className='app-form-link' href='/sair'>
                Sair
              </a>
            </div>
          ) : (
            <div className='app-form'>
              <div className='app-form-content'>
                <h1 className='app-form-title'>Olá, visitante!</h1>
                <UserLogin />
              </div>
            </div>
          )}
        </div>
        <figure>
          <img className='app-home-image' src={SocialImage} alt='' />
        </figure>
      </div>
    </div>
  );
}

export default App;
