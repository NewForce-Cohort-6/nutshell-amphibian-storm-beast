import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Chat = ({reFresh}) => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [chat, setChat] = useState({
        content:"",
        messageDate:""

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        // TODO: Create the object to be saved to the API
        const chatToSendToApi = {
            userId: nutshellUserObject.id,
            content: chat.content,
            messageDate: chat.messageDate
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch (`http://localhost:8088/messages`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(chatToSendToApi)
        })
        .then(response => response.json())
        .then(()=>{
        fetch (`http://localhost:8088/messages`)
        .then(response => response.json())
        .then(messagesArray => reFresh(messagesArray))
        })
    }

    return (
        <form className="chatForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="New message"
                        value={chat.content}
                        onChange={
                            (evt) => {
                                const copy = {...chat}
                                copy.content = evt.target.value
                                setChat(copy)
                            }
                        } />
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Send
            </button>
                </div>
            </fieldset>
        </form>
    )
}