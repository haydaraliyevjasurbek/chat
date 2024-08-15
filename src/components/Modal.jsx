import React, { useContext } from "react";
import { Context } from "../context/Context";

function Modal() {
  const { modalka, imgURL, setImgURL, coment, setComent,  alex, setAlex, evgeniy, setEvgeniy} = useContext(Context);

  return (
    <div className="modal__wrapper">
      <div className="close__modal" onClick={modalka}></div>
      <div className="modal">
        <div className="content">
          <h3 className="modal__title">Отправить картинку</h3>
          <label className="modal__label" htmlFor="url">
            URL
          </label>
          <input
            type="text"
            id="url"
            onChange={(e) => setImgURL(e.target.value)}
            placeholder="URL"
          />
          <label className="modal__label" htmlFor="comment">
            Комментарий
          </label>
          <input
            type="text"
            id="comment"
            onChange={(e) => setComent(e.target.value)}
            placeholder="Комментарий"
          />
          <div className="modal__btn">
            <span onClick={modalka} type="button" className="modal__btn-cancel">
              ОТМЕНА
            </span>
            <span type="submit" className="modal__btn-submit" onClick={() => handleSendMessage(name)}>
              ОТПРАВИТЬ
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
