import { useSelector, useDispatch } from 'react-redux';
import { selectDeck } from '../../store/slices/decksSlice';
import { setDeleteDeck } from '../../store/slices/decksSlice';
import SingleDeck from '../../components/singleDeck/SingleDeck';
import styles from './Main.module.css';

const Main = () => {
  const dispatch = useDispatch();
  const decks = useSelector(selectDeck);

  function deleteDeck(e, deck) {
    e.stopPropagation();
    dispatch(setDeleteDeck(deck));
  }

  return (
    <div className={styles.mainContainer}>
      {decks?.map((el, i) => (
        <SingleDeck key={i} deck={el} deleteDeck={deleteDeck} />
      ))}
    </div>
  );
};

export default Main;
