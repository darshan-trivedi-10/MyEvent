import React from 'react'
import './Details.css'
import { EventType } from '../../../utilities/eventType'

const Details = () => {

    return (
        <div className='Details'>
            <h1>Find Events Happening in Your City</h1>
            <h6>
                100+ Events  |  30 Cities  |  100K People Exploring Events
            </h6>
            <div className='eventType'>
                <input type='text' placeholder='Enter your city Name' />
                <select>
                    {
                        EventType.map((event) => {
                            return <option value={event}>{event}</option>
                        })
                    }
                </select>
                <button className='event-btn'>Explore</button>
            </div>
        </div>
    )
}

export default Details