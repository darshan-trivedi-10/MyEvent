import React from 'react'
import { useSelector } from 'react-redux';
import './Details.css'
import { EventType } from '../../../utilities/eventType'
import { useState } from 'react';

const Details = ({ city, setCity, category, setCategory, date, setDate, setSearch }) => {

    return (
        <>
            <div className='Details'>
                <h1>Find Events Happening in Your City</h1>
                <h6>
                    100+ Events  |  30 Cities  |  100K People Exploring Events
                </h6>
                <div className='eventType'>
                    <input type='text' name='city' value={city} placeholder='Enter your city Name'
                        onChange={(e) => { setCity(e.target.value); setSearch(0) }} />
                    <select value={category} onChange={(e) => { setCategory(e.target.value); setSearch(0) }}>
                        {
                            EventType.map((event) => {
                                return <option value={event}>{event}</option>
                            })
                        }
                    </select>
                    <button className='event-btn' onClick={() => { setSearch(1); }}>Explore</button>
                </div>
            </div >
            <div className='eventdate'>
                <h1>
                    Popular Events
                </h1>
                <div>
                    <input type='date' name='date' value={date} onChange={(e) => { setDate(e.target.value); setSearch(0) }} />
                    <button className='date-btn' onClick={() => setSearch(2)}>Explore</button>
                </div>
            </div>
        </>
    )
}

export default Details