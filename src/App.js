import React, { useState, useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import Card from './components/Card';
import ActionButtons from './components/ActionButtons';
import { deckArray } from './utils/DeckArray';
import InfoCard from './assets/Kaarten/Varia/Info.webp';

function App() {
  const [cardsArray, setCardsArray] = useState(deckArray);
  const [cardPicked, setCardPicked] = useState([{ element: 'intro', image: InfoCard, index: 0 }]);
  const [front, setFront] = useState(false);

  useEffect(() => {}, [cardsArray]);

  const shuffleCards = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    setCardsArray(array);
    return array;
  };

  const dealOneCard = () => {
    let cardsArrayStart = cloneDeep(cardsArray);
    const randomItem = cardsArrayStart[Math.floor(Math.random() * cardsArrayStart.length)];
    let cardsPickedArray = cloneDeep(cardPicked);
    cardsPickedArray.push(randomItem);
    setCardPicked([randomItem]);
  };

  const resetCards = () => {
    setCardsArray(deckArray);
    setCardPicked([{ element: 'intro', image: InfoCard, index: 0 }]);
  };

  return (
    <div className="bg-dark-pattern max-w-7xl sm:px-6 lg:px-8 relative min-h-screen mx-auto">
      <div className="sm:max-w-md grid mx-auto">
        <div className="md:block hidden">
          {cardsArray &&
            cardsArray.map((card, index) => {
              return (
                <div key={index}>
                  <Card singleCard={false} front={front} image={card?.image} />
                </div>
              );
            })}
        </div>

        <div className="max-w-lg max-h-[86vh] mx-auto">
          {cardPicked &&
            cardPicked.map((card, index) => {
              return <Card singleCard={true} front={true} image={card?.image} />;
            })}
        </div>

        <ActionButtons shuffleCards={shuffleCards} dealOneCard={dealOneCard} resetCards={resetCards} deckArray={deckArray} />
      </div>
    </div>
  );
}

export default App;
