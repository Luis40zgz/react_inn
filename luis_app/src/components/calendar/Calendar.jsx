import styles from './Calendar.module.css'
import Day from './day/Day.jsx'

function* getDays() {
    for(let i = 0; i <31; i++){
        yield i+1;
    } 
}

export default function Calendar(){
        function handlerDay(day){
            console.log(day)
        }

        const days = [...getDays()]
        
        return(
            <div className={styles.month}>{days.map(day=><Day key={day} {...{day, handlerDay}}/>)}</div>
        )
}