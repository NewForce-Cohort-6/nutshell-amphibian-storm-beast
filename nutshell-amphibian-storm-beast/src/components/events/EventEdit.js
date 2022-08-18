import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const EventEdit = () => {

    const user = localStorage.getItem("nutshell_user")
    const userObject = JSON.parse(user)

    const [singleEvent, updateEvent] = useState({
        userId: userObject.id,
        eventName: "",
        eventDate: "",
        location: ""
        
    })

    const {eventId} = useParams()

    useEffect(() => {
        fetch(`http://localhost:8088/events?id=${eventId}`)
        .then(response => response.json())
        .then(data => {
            const eventObject = data[0]
            updateEvent(eventObject)
        })
    },[])
    
    const navigate = useNavigate()

    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        
        const editedEvent = {
            userId: userObject.id,
            eventName: singleEvent.eventName,
            eventDate: singleEvent.eventDate,
            location: singleEvent.location
        }

        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(editedEvent)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/")
            })
    }

    return (
        <form className="editEventForm">
            <h2 className="editEventForm__title">Edit Event</h2>
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