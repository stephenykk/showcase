import { useEffect, useState } from "react";


function Greet(props: any) {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(c => c + 1)
    }


    useEffect(() => {
        console.log('greet mounted....')
    }, [])

    return (
        <div className="greet-comp">
            Greeting {count} <button onClick={increment}>add</button>
            {props.children}
        </div>
    )
}

export default Greet
