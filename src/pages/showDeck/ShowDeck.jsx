import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SingleCard from '../../components/singleCard/SingleCard';
import { selectDeck } from '../../store/slices/decksSlice';
import styles from './ShowDeck.module.css';

const ShowDeck = () => {
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const title = queryParams.get('title');
  const currentDeck = useSelector(selectDeck)?.find((el) => el.title === title);

  function showNext() {
    if (currentCard < currentDeck.words.length - 1) {
      setCurrentCard(currentCard + 1);
    }
    if (currentCard === currentDeck.words.length - 1) {
      navigate('/decks');
    }
    setShowBack(false);
  }

  function showAnswer() {
    setShowBack(true);
  }

  return (
    currentDeck && (
      <div className={styles.mainContainer}>
        <div className={styles.title}>{currentDeck?.title}</div>
        <SingleCard
          content={currentDeck?.words[currentCard]}
          showNext={showNext}
          showAnswer={showAnswer}
          showBack={showBack}
        />
      </div>
    )
  );
};

export default ShowDeck;
