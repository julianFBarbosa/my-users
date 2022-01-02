import React, { useEffect, useRef } from 'react';

const Card = ({ children }) => {
  const refCard = useRef(null);
  useEffect(() => {
    const card = refCard.current;
    
    return () => {
      card.classList.add('to-left');
    };
  }, []);

  return (
    <div className='app-wrapper'>
      <div className='app-content'>
        <div className='app-inner' ref={refCard}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
