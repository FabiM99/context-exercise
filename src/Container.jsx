
import { useState } from "react"

export function Container ({title, children}) {

    const [collapsed, setCollpase] = useState(false)

    function handleToggle(){
    setCollpase(t =>!t)
}
    return (
        <div className="div-container">
            <div className="title">{title} <button onClick={handleToggle}>Find out who has done this exercise</button></div>
           {collapsed && <div className="children-content">{children}</div>}
           
        </div>
    )
}