import React from 'react'
import allEvent from '../../../Data/event'
import './event.css'
import EventCard from './eventCard/EventCard'


const Event = () => {
  console.log(allEvent)
  return (
    <>
      <div className='eventdate'>
        <h1>
          Popular Events
        </h1>
        <input type='date' />
      </div>
      <div className='events'>
        {
          allEvent.map((event, id) => {
            console.log(event, id);
            return <EventCard event={event} />
          })
        }
      </div>
    </>
  )
}

export default Event