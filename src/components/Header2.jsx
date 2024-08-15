import React, { useEffect, useRef } from "react";
import { useContext } from "react";
import fotoImg from "../../public/foto-icon.svg";
import sendImg from "../../public/send-icon.svg";
import { Context } from "../context/Context";
import Messages from "./Messages";

function Header2({ name, img, networkStatus }) {
  const { allMessage, evgeniyText,
    setEvgeniyText, handleSendMessage } = useContext(Context)

  const endRef2 = useRef(null);

  

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
        <div ref={endRef2}></div>
      </main>

      <footer>
        <form onSubmit={(e) => handleSendMessage(name, e)} className="footer">

          <input
            value={evgeniyText}
            onChange={(e) => setEvgeniyText(e.target.value)}
            type="text"
            placeholder="Написать сообщение..."
            className="footer__inp-text"
          />
          <button type="submit">
            {evgeniyText ? (
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
          </button>
        </form>

      </footer>
    </div>
  );
}

export default Header2;
