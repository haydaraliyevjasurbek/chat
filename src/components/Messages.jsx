import React, { useEffect, useRef } from "react";

const Messages = ({ allMessage, name }) => {
  return (
    <>
      {allMessage.map((item, index) => (
        <div className={`${item.user}messageBox`} key={index}>
          <span>{item.user}</span>
          <img
            src={item.img}
            style={{
              width: "200px",
              height: "auto",
              borderRadius: "10px",
              display: "block",
              margin: "0 auto",
              objectFit: "cover"
            }}
            alt=""
          />
          <p>{item.text}</p>
          <span className="time">{item.time}</span>
        </div>
      ))}
    </>
  );
};

export default Messages;
