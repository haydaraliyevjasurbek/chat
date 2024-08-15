import { createContext, useEffect, useState } from 'react'
export const Context = createContext()

function ContextProvider({ children }) {
    const [alexText, setAlexText] = useState("");
    const [evgeniyText, setEvgeniyText] = useState('')
    const [allMessage, setAllMessage] = useState([])


    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let day = time.getDate()
    let mounth = time.getMonth()
    let year = time.getFullYear()

    const handleSendMessage = (name) => {
        if (name == "Evgeniy") { setEvgeniyText("") }
        if (name == "Alex") { setAlexText("") }
        setAllMessage(
            [...allMessage, {
                user: name,
                time: `${hours}:${minutes}  ${day}/${mounth}/${year}`,
                text: alexText || evgeniyText,
            }]
        );
        setAlexText("")
        setEvgeniyText("")
    }






    return <Context.Provider value={{
        allMessage, setAllMessage, alexText,
        setAlexText, handleSendMessage, evgeniyText,
        setEvgeniyText
    }}>
        {children}
    </Context.Provider>
}

export default ContextProvider