import styles from './Day.module.css';

export default function Day({day}){

    return(
        <div data-day={day} className={styles.day}>{day}</div>
    )
}