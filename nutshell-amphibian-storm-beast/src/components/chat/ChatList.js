
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Chat } from "./Chat"
import "./Chat.css"

export const ChatList = () => {
    const [messages, setMessages] = useState([])
    useEffect (()=>{
        fetch (`http://localhost:8088/messages`)
        .then(response => response.json())
        .then(messagesArray => setMessages(messagesArray))
    },
    []
    )
return<>
<h2>Chat</h2>
<div className="container">
<article className="messages">
    {
        messages.map(
            (message) => {
                return <section className="message">
                    <div>{message?.user?.userId}{message.content}</div>
                </section>
            }
        )
    }
    </article>
    <Chat reFresh={setMessages} />

</div>

</>
}

//change fetch call to embed user and reference user