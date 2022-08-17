import { Link } from "react-router-dom"

export const Event = ({ event }) => {
    if(event.eventDate) {
        return <article  className="nextEvent"><b>{event.eventName}</b>
            <section>{event.eventDate}</section>
            <section>{event.location}</section>
        </article>
    } else {
        return <article  className="event"><b>{event.eventName}</b>
            <section>{event.eventDate}</section>
            <section>{event.location}</section>
        </article>
    }
}