import React, { useEffect, useRef } from 'react'

const Messages = ({ allMessage, name }) => {

    return (
        <>
            {allMessage.map((item, index) => (
                <div className={`${item.user}messageBox`} key={index}>
                    <span>{item.user}</span>
                    <p >{item.text}</p>
                    <span className='time'>{item.time}</span>
                </div>

            ))}
        </>
    )
}

export default Messages