import "tailwindcss"

function Greeting(props){
    const { name, Greet } = props
    return <p className="font-bold text-blue-500">{name}さん{Greet}</p>
}
export default Greeting