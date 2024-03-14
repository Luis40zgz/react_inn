import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    function handlerClick(){
        setCount(count +1)
    }
    return(
        <button onClick={handlerClick}>Count: {count}</button>
    )
}