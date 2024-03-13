import './calendar.css'
export default function Calendar(){
        function handlerClick(ev){
            ev.stopPropagation()
            console.log(ev.target.textContent)
        }

        function* monthMaker() {
            let index = 1;
            while (index<=31) yield index++; 
        }
        
        const month = monthMaker()
        const array_days = [...month];
        return(
            <div className='month' onClick={handlerClick}>{array_days.map(day=><div className="day" key={day}>{day}</div>)}</div>
        )
}