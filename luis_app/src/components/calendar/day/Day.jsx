import './day.css';

export default function Day(props){
    const {day, handlerDay} = props;
    function handlerClick(ev){
        ev.stopPropagation();
        ev.preventDefault();
        handlerDay(day);
    }
    return(
        <div onClick={handlerClick} className='day'>{day}</div>
    )
}