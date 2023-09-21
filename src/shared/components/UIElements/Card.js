import React from 'react';

import './Card.css';

function Card(props) {
  const {children, className, style } = props;
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
