export default function User({user}){
    if(!user){
        return(
            <button>Login</button>
        )
    }
    return(
        <div>User: {user}</div>
    )
}