import "tailwindcss"

function Greeting(props){
    console.log(Greeting);
    const { name, Greet, onClick } = props
    return (
        <p className="font-bold text-blue-500">
            {name}さん{Greet}
            <button onClick={onClick}>おせ</button>
        </p>
    )
}
export default Greeting