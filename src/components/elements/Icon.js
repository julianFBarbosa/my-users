import React from 'react';

const Icon = ({ Icon, href, text }) => {
  return (
    <a className='app-icon-link' href={href}>
      <Icon className='app-icon-item' />
      <p className='app-icon-description'>{text}</p>
    </a>
  );
};

export default Icon;
