"use client"

import { useState } from "react"

export default function Main() {
    const [count, setCount] = useState(0)
    const handleCountUp = () => {
        setCount(count +1)
    }
    const handleCountDown = () => {
        setCount(count -1)
    }

    return (
        <div>
            <p>Hier könnt ihr hoch- und runterzählen</p>
            <div className="bg-color blue p 4">{count}</div>
            <br/>
            <button className="p 4 " onClick={handleCountUp}>Up</button>
            <button className="p 4 " onClick={handleCountDown}>Down</button>
            
        </div>

    )
}