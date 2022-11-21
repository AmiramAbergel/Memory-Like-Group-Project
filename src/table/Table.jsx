import styles from './table.module.scss';
//test push & merge
export default function Table(props) {
    return (
        <div className={styles.table}>
            <div className={styles['field-block']}>
                <p>Correct</p>
                <p id={styles.correct}>{props.scoreData.wins}</p>
            </div>
            <div className={styles['field-block']}>
                <p>Incorrect</p>
                <p id={styles.incorrect}>{props.scoreData.loses}</p>
            </div>

            <div className={styles['field-block']}>
                <p>Total score:</p>
                <p id={styles['total-score']}>{props.scoreData.totalScore}</p>
            </div>
            <div className={styles['field-block']}>
                <p id={styles.timer}>Timer:</p>
                <p className={styles.time}>
                    <span>
                        {Math.floor(props.timer / 60)} :{props.timer % 60}
                    </span>
                </p>
            </div>
        </div>
    );
}
