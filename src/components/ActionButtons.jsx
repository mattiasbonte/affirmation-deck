import React from 'react';
import PropTypes from 'prop-types';

const ActionButtons = (props) => {
  return (
    <div className='buttons'>
      <button
        className='button'
        onClick={() => props.shuffleCards(props.deckArray)}
      >
        Shuffle
      </button>
      <button className='button' onClick={() => props.dealOneCard()}>
        Draw
      </button>
      <button className='button' onClick={() => props.resetCards()}>
        Reset
      </button>
    </div>
  );
};

ActionButtons.propTypes = {
  shuffle: PropTypes.func,
  dealOneCard: PropTypes.func,
  flip: PropTypes.func,
  deckArray: PropTypes.array,
};

export default ActionButtons;
