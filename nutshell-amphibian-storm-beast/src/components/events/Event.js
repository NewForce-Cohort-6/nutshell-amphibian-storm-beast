import { Link } from "react-router-dom"

export const Event = ({ event }) => {
    const date = new Date(parseInt(event.eventDate))
    //these dates are not in the correct format - no longer a learning goal for this project

    if(event.next) {
        return <article  className="nextEvent"><b>{event.eventName}</b>
            <section><em>{date.toLocaleDateString()}</em></section>
            <section><em>{event.location}</em></section>
            <Link to={`/events/${event.id}/edit`}>Edit</Link>
        </article>
    } else {
        return <article  className="event"><b>{event.eventName}</b>
            <section>{event.eventDate}</section>
            <section>{event.location}</section>
            <Link to={`/events/${event.id}/edit`}>Edit</Link>
        </article>
    }
}