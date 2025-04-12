import { useState } from "react"

export default function Counter()
{
    const [count, setCount] = useState(0);

    const handleClick = () =>
    {
        setCount(count + 1);
    }
    const counterStyle = {
        border: '2px solid white'
    }
    return (
        <div style={counterStyle}>
            <h3>Count: {count} </h3>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}