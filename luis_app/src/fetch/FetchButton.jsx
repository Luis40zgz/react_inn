export default function FetchForm (params) {
    return (
        <form>
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="price">Nombre</label>
            <input type="number" name="name" id="name"/>
            <button onClick={handlerClick}></button>
        </form>
    )
}