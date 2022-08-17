
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Chat } from "./Chat"
import "./Chat.css"

export const ChatList = () => {
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState([])
    useEffect (()=>{
        fetch (`http://localhost:8088/messages?_expand=user`)
        .then(response => response.json())
        .then(messagesArray => setMessages(messagesArray))
    },
    []
    )
return<>
<h2>Chat</h2>
<div className="container">
<article className="messages">
<div class="container pt-3">
    <div class="scroller">
    {
        messages.map(
            (message) => {
                return <section className="message">
                    <div>{message?.user?.userId}{message.content}{message?.user?.fullName}</div>
                </section>
            }
        )
    }
    </div>
    </div>
    </article>
    <Chat reFresh={setMessages} />

</div>

</>
}

//change fetch call to embed user and reference user