import { useFetch } from "./useFetch";

function eventCarrito(pizza){
    return new CustomEvent("carrito",{
        detail: pizza,
        composed: true,
        bubbles:true
        })
}

export default function Fetch(){
    const {loading, error, data} = useFetch("http://localhost:3000/pizzas",[])
    
    if(error) <div>{error}</div>
    if(loading) <div>{loading}</div>

    function handlerClick(ev){
        ev.stopPropagation();
        const node = ev.nativeEvent.composedPath().find((n=>n.dataset && 'id' in n.dataset));
        if(node){
            const {id} = node.dataset;
            const pizza = data.find(p=>p.id===id)
            pizza && node.dispatchEvent(eventCarrito(pizza));
        }
    }

        return(
            <div>
            {data?.map(({id, name, price})=>{
                return(
                    <div key={id}>
                        <div>{id}</div>
                        <div>{name}</div>
                        <div>{price}</div>
                        <button data-id={id} onClick={handlerClick}>Comprar</button>
                    </div>
                    )
                }
                )}
        </div>
    )
}