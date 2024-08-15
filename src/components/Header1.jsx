import React, { useContext, useEffect, useRef } from "react";
import fotoImg from "../../public/foto-icon.svg";
import sendImg from "../../public/send-icon.svg";
import { Context } from "../context/Context";
import Messages from "./Messages";

function Header1({ name, img, networkStatus }) {
  const { allMessage, setAllMessage, alexText, setAlexText, handleSendMessage } = useContext(Context)
  

  
  const endRef1 = useRef(null);

  
  return (
    <div className="conatiner">
      <header className="header">
        <img className="header__person-img" src={img} />
        <div className="header__text-content">
          <h1 className="header__person-name">{name}</h1>
          <p className="header__person-networkStatus">{networkStatus}</p>
        </div>
      </header>

      <main className={`${name} main`}>
        <Messages allMessage={allMessage} name={name} />
        <div ref={endRef1}></div>
      </main>
      <footer>
        <div className="footer">

          <input
            value={alexText}
            onChange={(e) => setAlexText(e.target.value)}
            type="text"
            placeholder="Написать сообщение..."
            className="footer__inp-text"
          />
          <div className="a" onClick={(e) => handleSendMessage(name, e)}>
            {alexText ? (
              <img src={sendImg} className="footer__send-img" alt="" />
            ) : (
              <>
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="sendFile"
                  onChange={(e) => setFiel(e.target.value)}
                />
                <label htmlFor="sendFile">
                  <img src={fotoImg} className="footer__foto-img" alt="" />
                </label>
              </>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Header1;
