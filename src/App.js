import React, { useState, useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import './App.css';
import Card from './components/Card';
import ActionButtons from './components/ActionButtons';
import { deckArray } from './utils/DeckArray';
import InfoCard from './assets/Kaarten/Varia/Info.png';

function App() {
  const [cardsArray, setCardsArray] = useState(deckArray);
  const [cardPicked, setCardPicked] = useState([
    { element: 'intro', image: InfoCard, index: 0 },
  ]);
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
    const randomItem =
      cardsArrayStart[Math.floor(Math.random() * cardsArrayStart.length)];
    const newCardsArray = cardsArrayStart.filter(
      (element) => element.index !== randomItem.index
    );
    setCardsArray(newCardsArray);
    let cardsPickedArray = cloneDeep(cardPicked);
    cardsPickedArray.length < 44 && cardsPickedArray.push(randomItem);
    setCardPicked(cardsPickedArray);
  };

  const resetCards = () => {
    setCardsArray(deckArray);
    setCardPicked([{ element: 'intro', image: InfoCard, index: 0 }]);
  };

  return (
    <div className='App'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '40px auto 0px 0px',
          marginLeft: '200px',
          height: '400px',
        }}
      >
        {cardsArray &&
          cardsArray.map((card, index) => {
            return (
              <div key={index}>
                <Card singleCard={false} front={front} image={card?.image} />
              </div>
            );
          })}
      </div>
      <ActionButtons
        shuffleCards={shuffleCards}
        dealOneCard={dealOneCard}
        resetCards={resetCards}
        deckArray={deckArray}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '40px auto 0px 0px',
          marginLeft: '400px',
        }}
      >
        {cardPicked &&
          cardPicked.map((card, index) => {
            return (
              <div key={index}>
                <Card singleCard={true} front={true} image={card?.image} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
