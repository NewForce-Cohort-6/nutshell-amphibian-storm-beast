import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./Events.css"
import { Event } from "./Event.js"

export const EventList = () => {

    const [events, setEvents] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])

    const user = localStorage.getItem("nutshell_user")
    const userObject = JSON.parse(user)

    const navigate = useNavigate()

    useEffect(
        () => {fetch('http://localhost:8088/events')
                .then(response => response.json())
                .then(eventsArray => {
                    const sortedEvents = eventsArray.sort(sortByDate)
                    let nextEvent = sortedEvents[0]
                    nextEvent.next = true
                    setEvents(sortedEvents)
                })
        },[]
    )

    const getAllEvents = () => {
        fetch('http://localhost:8088/events')
        .then(response => response.json())
        .then(eventsArray => {
            setEvents(eventsArray)
        })
    }

    useEffect(
        () => {
            const myEvents = events.filter(event => event.userId === userObject.id)
            setFilteredEvents(myEvents)
        }, [events]
    )

    const sortByDate = (a,b) => {
        return a - b;
    }

    

    return <div className="eventsSection">
        <button onClick={() => { navigate("/event/create")}}>New Event</button>
        <article className="events">
            {
                filteredEvents.map(event => <Event key={event.id} event={event} getAllEvents={getAllEvents}/>)
            }
        </article>
    </div>
}