import React from 'react'

const EventCard = ({ event }) => {
    const startDate = new Date(event.startdate);
    const endDate = new Date(event.enddate);

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={event.eventPoster} className="card-img-top" alt="..." style={{ width: "18rem", height: "24vh" }} />
            <div className="card-body">
                <h6>{event.name}</h6>
                <h6>{startDate.toDateString()} - {endDate.toDateString()}</h6>
                <h6>{event.location}</h6>
                <span>
                    Price : {event.price}₹
                </span>
            </div>
        </div>
    )
}

export default EventCard