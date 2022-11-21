import styles from "./table.module.scss";
//test push & merge
export default function Table(props) {
  return (
    <div className={styles.table}>
      <div className={styles["field-block"]}>
        <p>Correct</p>
        <p id={styles.correct}>{props.correct}0</p>
      </div>
      <div className={styles["field-block"]}>
        <p>Incorrect</p>
        <p id={styles.incorrect}>{props.incorrect}0</p>
      </div>

      <div className={styles["field-block"]}>
        <p>Total score</p>
        <p id={styles["total-score"]}>{props.totalScore}0</p>
      </div>
      <div className={styles["field-block"]}>
        <p id={styles.timer}>Timer:</p>
        <p className={styles.time}>
          <span>{props.minutes}40</span>:<span>{props.seconds}00</span>
        </p>
      </div>
    </div>
  );
}
