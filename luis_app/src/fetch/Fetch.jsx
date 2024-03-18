import { useFetch } from "./useFetch";

export default function Fetch(){
    const {loading, error, data} = useFetch("http://localhost:3000/pizzas",[])
    
    if(error) <div>{error}</div>
    if(loading) <div>{loading}</div>

        return(
            <>
            {data?.map(({id, name, price})=>{
                return(
                    <div key={id}>
                        <div>{id}</div>
                        <div>{name}</div>
                        <div>{price}</div>
                    </div>
                    )
                }
                )}
        </>
    )
}