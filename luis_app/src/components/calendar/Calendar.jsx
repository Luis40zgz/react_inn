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
            /* Recorriendo la lista que recorre el evento para capturar el elemento con el data set esté donde esté */
            const node = ev.nativeEvent.composedPath().find(n=>n.dataset && 'day' in n.dataset)
        if(node){
            const {day } = node.dataset
            console.log(day)
        }
        }

        const days = [...getDays()]
        
        return(
            <div className={styles.month} onClick={handlerClick}>{days.map(day=><Day key={day} {...{day}}/>)}</div>
        )
}