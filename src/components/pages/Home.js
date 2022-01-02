import React from 'react';
import { Link } from 'react-router-dom';
import UserLogin from '../layouts/UserLogin';
import Card from '../layouts/Card';
import SocialImage from '../../assets/undraw_Social_dashboard_re_ocbd.png';

const Home = () => {
  const isLogged = false;
  const user = 'Fulano';

  return (
    <Card>
      <div className='app-body'>
        {isLogged ? (
          <div className='app-body-content welcome'>
            <h1 className='app-form-title'>Olá, {user}!</h1>
            <Link to='/editar' className='app-form-button primary'>
              Editar meus dados
            </Link>
            <Link to='/sair' className='app-form-link'>
              Sair
            </Link>
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
      <figure className='app-banner'>
        <img className='app-home-image' src={SocialImage} alt='' />
      </figure>
    </Card>
  );
};

export default Home;
