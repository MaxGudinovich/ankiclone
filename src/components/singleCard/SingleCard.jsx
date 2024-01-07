import styles from './SingleCard.module.css';

const SingleCard = ({ content, showNext, showAnswer, showBack }) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.card}>{content.front}</div>
      {showBack && <div className={styles.card}>{content.back}</div>}
      {!showBack && (
        <button className={styles.showBackBtn} onClick={showAnswer}>
          Show answer
        </button>
      )}
      <button className={styles.nextBtn} onClick={showNext}>
        Next
      </button>
    </div>
  );
};

export default SingleCard;
