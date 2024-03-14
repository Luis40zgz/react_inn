import './day.css';

export default function Day({day, handlerDay}){
    
    function handlerClick(ev){
        ev.stopPropagation();
        ev.preventDefault();
        handlerDay(day);
    }
    return(
        <div onClick={handlerClick} className='day'>{day}</div>
    )
}