import { useEffect, useState } from "react"

export default function Carrito(){
    const [data, setData] = useState([]);
    
    const handlerEvent = (ev) => {
        console.log(ev)
        data.push(ev.detail)
        setData([...data])
    }

    useEffect(()=>{
        window.addEventListener('carrito',handlerEvent)
        return window.removeEventListener("carrito",handlerEvent)
    },[])

    return(
        <div>Carrito: {data.length}</div>
    )

}