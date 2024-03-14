import styles from './Calendar.module.css'
import Day from './day/Day.jsx'

function* getDays() {
    for(let i = 0; i <31; i++){
        yield i+1;
    } 
}

export default function Calendar(){
        function handlerClick(ev){
            ev.stopPropagation();
            ev.preventDefault();
            const {day} = ev.target.dataset;
            console.log(day);
        }

        const days = [...getDays()]
        
        return(
            <div className={styles.month} onClick={handlerClick}>{days.map(day=><Day key={day} {...{day}}/>)}</div>
        )
}