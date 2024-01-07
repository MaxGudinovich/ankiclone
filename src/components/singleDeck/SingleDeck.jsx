import { useNavigate } from 'react-router-dom';
import styles from './SingleDeck.module.css';

const SingleDeck = ({ deck, deleteDeck }) => {
  const navigate = useNavigate();

  function showDeck() {
    const title = deck.title;
    navigate(`/study?title=${title}`);
  }

  return (
    <>
      <div className={styles.singleDeck} onClick={showDeck}>
        <p>{deck.title}</p>
        <button
          className={styles.deleteBtn}
          onClick={(e) => deleteDeck(e, deck)}
        >
          Delete deck
        </button>
      </div>
    </>
  );
};

export default SingleDeck;
