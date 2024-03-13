export default function Header({my_name}){
    const name = my_name;
    return(
        <header className="header">
            <h1>Título de la página de {name}</h1>
        </header>
    )
}