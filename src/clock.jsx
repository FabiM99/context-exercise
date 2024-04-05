import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "./LanguageContext";


export function Clock(){
    const [date, setDate] = useState(new Date())

    useEffect(() =>{
        console.log("Setting up clock")

        const intervalId = setInterval(() =>{
            setDate(new Date())
        }, 1000)

        return () => {
            console.log("clearing clock")

            clearInterval(intervalId)
        }

        
    }, [])
    const language = useContext(LanguageContext)
    return (
       
        <div className="clock-container">
             <h1>{language === "en" ? "CURRENT TIME IS" : "ORA CORRENTE"}</h1>
          <div className="clock">
            <h4 className="hour">{date.toLocaleTimeString()}</h4>
          </div>
        </div>
        
    )
}