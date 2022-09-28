import React from 'react'

const EventCard = ({ event }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={event.img} className="card-img-top" alt="..." style={{ width: "18rem", height: "24vh" }} />
            <div className="card-body">
                <h6>{event.eventname}</h6>
                <h6>{event.startDate} - {event.endDate}</h6>
                <h6>{event.place}</h6>
                <span>
                    Price : {event.Price}₹
                </span>
            </div>
        </div>
    )
}

export default EventCard