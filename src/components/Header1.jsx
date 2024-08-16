import React, { useContext, useEffect, useRef } from "react";
import fotoImg from "@i/foto-icon.svg";
import sendImg from "@i/send-icon.svg";
import { Context } from "@/context/Context";
import Messages from "@/components/Messages";
import Modal from "@/components/Modal";

function Header1({ name, img, networkStatus,  bgImg }) {
  const {
    modalka,
    openModal,
    setOpenModal,
    allMessage,
    alexText,
    setAlexText,
    handleSendMessage
  } = useContext(Context);

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

      <main className={`${name} main`} style={{backgroundImage: `url(${bgImg})`}}>
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
          <div className="a">
            {alexText ? (
              <img
                src={sendImg}
                className="footer__send-img"
                alt=""
                onClick={() => handleSendMessage(name)}
              />
            ) : (
              <>
                <div style={{ display: "none" }} id="sendFile" />
                <label
                  htmlFor="sendFile"
                  onClick={() => {
                    console.log("bosildi"), modalka(true);
                  }}
                >
                  <img
                    src={fotoImg}
                    className="footer__foto-img"
                    alt=""
                    onClick={modalka}
                  />
                </label>
              </>
            )}
          </div>
        </div>
      </footer>
      {openModal && <Modal  allMessage={allMessage} name={name}/>}
    </div>
  );
}

export default Header1;
