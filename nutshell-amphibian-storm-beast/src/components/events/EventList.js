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
                    setEvents(eventsArray)
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

    let markedEvents = []

    useEffect(
        () => {
            const myEvents = events.filter(event => event.userId === userObject.id)
            setFilteredEvents(myEvents)
            markedEvents = markNextEvent(filteredEvents)
        }, [events]
    )

    const sortByDate = (a,b) => {
        const date1 = new Date(a)
        const date2 = new Date(b)
        
        return date1 - date2;
    }

    function markNextEvent(events) {
        const sortedEvents = events.sort(sortByDate)
        let nextEvent = sortedEvents[0]
        nextEvent.next = true
    }

    

    return <div className="eventsSection">
        <h2>Events</h2>
        <button onClick={() => { navigate("/event/create")}}>New Event</button>
        <article className="events">
            {
                markedEvents.map(event => <Event key={event.id} event={event} getAllEvents={getAllEvents}/>)
            }
        </article>
    </div>
}