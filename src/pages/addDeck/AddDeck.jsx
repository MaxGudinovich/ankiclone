import { useDispatch, useSelector } from 'react-redux';
import { setAddDeck } from '../../store/slices/decksSlice';
import { selectDeck } from '../../store/slices/decksSlice';
import styles from './AddDeck.module.css';
import { useState } from 'react';

const AddDeck = () => {
  const [title, setTitle] = useState('');
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const decks = useSelector(selectDeck);

  const dispatch = useDispatch();

  function handleAddDeckContent() {
    if (!title || !front || !back) {
      return alert('Please, fill out all fields!');
    }
    dispatch(
      setAddDeck({ title: title, words: [{ front: front, back: back }] })
    );
    setFront('');
    setBack('');
  }

  function showDropdown() {
    setDropdown(!dropdown);
  }

  function chooseDeck(title) {
    setTitle(title);
    setDropdown(false);
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.singleContainer}>
        <p>Deck</p>
        <div className={styles.inputWithDropdown}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onClick={(e) => showDropdown()}
          />
          {dropdown && !title && (
            <>
              {decks.map((el, i) => (
                <div
                  key={i}
                  className={styles.decksDropdown}
                  onClick={(e) => chooseDeck(el.title)}
                >
                  {el.title}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <div style={{ marginTop: '25px', width: '100%' }}>
        <div className={styles.singleContainer}>
          <p>Front</p>
          <input
            type="text"
            value={front}
            onChange={(e) => setFront(e.target.value)}
          />
        </div>
        <div className={styles.singleContainer}>
          <p>Back</p>
          <input
            type="text"
            value={back}
            onChange={(e) => setBack(e.target.value)}
          />
        </div>
      </div>
      <button className={styles.btn} onClick={handleAddDeckContent}>
        Add
      </button>
    </div>
  );
};

export default AddDeck;
