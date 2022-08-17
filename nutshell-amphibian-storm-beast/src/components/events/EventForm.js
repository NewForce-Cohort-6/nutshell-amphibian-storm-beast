import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const EventForm = () => {
    const navigate = useNavigate()

    const user = localStorage.getItem("nutshell_user")
    const userObject = JSON.parse(user)

    const [singleEvent, updateEvent] = useState({
        userId: userObject.id,
        eventName: "",
        eventDate: "",
        location: ""
        
    })

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        
        const newEvent = {
            userId: userObject.id,
            eventName: singleEvent.eventName,
            eventDate: singleEvent.eventDate,
            location: singleEvent.location
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch('http://localhost:8088/events', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newEvent)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/")
            })
    }

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="EventName">Event Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={singleEvent.eventName}
                        onChange={(changeEvent) => {
                            const copy = {...singleEvent}
                            copy.eventName = changeEvent.target.value
                            updateEvent(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="EventDate">Date:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={singleEvent.eventDate}
                        onChange={(changeEvent) => {
                            const copy = {...singleEvent}
                            copy.eventDate = changeEvent.target.value
                            updateEvent(copy)
                        }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        value={singleEvent.location}
                        onChange={(changeEvent) => {
                            const copy = {...singleEvent}
                            copy.location = changeEvent.target.value
                            updateEvent(copy)
                        }} />
                </div>
            </fieldset>
            <button onClick={(clickEvent) => {handleSaveButtonClick(clickEvent)}} className="btn btn-primary">
                Submit Event
            </button>
        </form>
    )
}