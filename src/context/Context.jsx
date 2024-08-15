import { createContext, useEffect, useState } from "react";
import Modal from "../components/Modal";
export const Context = createContext();

function ContextProvider({ children }) {
  const [alexText, setAlexText] = useState("");
  const [evgeniyText, setEvgeniyText] = useState("");
  const [allMessage, setAllMessage] = useState([]);
  const [imgURL, setImgURL] = useState('');
  const [coment, setComent] = useState('')
  const [openModal, setOpenModal] = useState(false);
  const [alex, setAlex] = useState('Alex')
  const [evgeniy, setEvgeniy] = useState('Evgeniy')

  const modalka = () => {
    setOpenModal(!openModal);
  };
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let day = time.getDate();
  let mounth = time.getMonth();
  let year = time.getFullYear();

  const handleSendMessage = (name) => {
    if (name == "Evgeniy") {
      setEvgeniyText("");
    }
    if (name == "Alex") {
      setAlexText("");
    }
    
    setAllMessage([
      ...allMessage,
      {
        img: url,
        
        user: name,
        time: `${hours}:${minutes}  ${day}/${mounth}/${year}`,
        text: alexText || evgeniyText
      }
    ]);
    setAlexText("");
    setEvgeniyText("");
    setImgURL("");
    setComent("");
  };

  return (
    <Context.Provider
      value={{
        modalka,
        openModal,
        setOpenModal,
        imgURL, 
        setImgURL,
        coment, 
        setComent,
        allMessage,
        setAllMessage,
        alexText,
        setAlexText,
        handleSendMessage,
        evgeniyText,
        setEvgeniyText
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
