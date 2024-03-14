import styles from './Day.module.css';

export default function Day({day, handlerDay}){

    function handlerClick(ev){
        ev.stopPropagation();
        ev.preventDefault();
        handlerDay(day);
    }
    return(
        <div onClick={handlerClick} className={styles.day}>{day}</div>
    )
}