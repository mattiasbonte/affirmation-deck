import React from 'react';
import PropTypes from 'prop-types';

const ActionButtons = ({ shuffleCards, dealOneCard, resetCards, deckArray }) => {
  const general = 'py-2 uppercase border rounded-t-2xl mx-1 sm:rounded-2xl';
  const font = 'text-lg uppercase';
  const gradient = 'bg-gradient-to-r from-[#d1913c] via-[#ffd194] to-[#d1913c]';
  const hover = 'hover:font-bold hover:via-amber-300';

  return (
    <div className="sm:relative fixed bottom-0 flex justify-around w-full mt-3">
      <button onClick={() => shuffleCards(deckArray)} type="button" className={`${general} ${font} ${gradient} ${hover} flex-1`}>
        Shuffle
      </button>
      <button onClick={() => dealOneCard()} type="button" className={`${general} ${font} ${gradient} ${hover} flex-grow`}>
        Draw
      </button>
      <button onClick={() => resetCards()} type="button" className={`${general} ${font} ${gradient} ${hover} flex-1`}>
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
