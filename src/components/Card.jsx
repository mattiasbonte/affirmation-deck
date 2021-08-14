import React from 'react';
import PropTypes from 'prop-types';
import backCardImg from '../assets/Kaarten/Varia/Achterkant.webp';
import '../App.css';

const Card = (props) => {
  const { front, image, singleCard } = props;

  if (front === true) {
    return (
      <div className={singleCard ? `single-card-container` : `card-container`}>
        <img src={image} alt='card' className='width' />
      </div>
    );
  } else {
    return (
      <div
        className={singleCard ? `single-card-container` : `card-container`}
        style={{ backgroundImage: `url(${backCardImg})` }}
      ></div>
    );
  }
};

Card.propTypes = {
  front: PropTypes.bool,
};

export default Card;
