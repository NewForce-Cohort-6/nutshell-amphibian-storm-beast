
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
<div className="container pt-3">
    <div className="scroller">
    {
        messages.map(
            (message) => {
                return <section className="message" key={`${message.id}`}>
                    <div>{message?.user?.userId}{message.content}
                    <span className="whitespace">
                        {message?.user?.fullName}</span>
                        {/* <Link to={`/chats/${chat.id}/edit`}>Edit</Link> */}
                        
                        </div>
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
//inline editing