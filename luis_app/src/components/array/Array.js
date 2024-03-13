import './array.css';

export default function Array(){
    const data = [1,2,3,4,5,6,7,8]
    return (
        <>
            {data.map(element=><div className='num' key={element}>{element}</div>)}
        </>
    )
}