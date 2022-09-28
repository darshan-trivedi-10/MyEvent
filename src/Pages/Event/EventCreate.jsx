import React from 'react'
import Navbar from '../../Component/Home/navbar/navbar'
import { EventType } from '../../utilities/eventType'
import FileBase from 'react-file-base64';
import './EventCreate.css'


const EventCreate = () => {
    return (
        <>
            <Navbar singIn={false} />
            <div className='eventCreate'>
                <h1>Create Your Event</h1>
                <div className='eventForm'>
                    <label for="eventname">Event Name*</label>
                    <input className='inputStyle' type='text' placeholder='Enter Event Name' />
                    <label for="startdate">Start Date*</label>
                    <input className='inputStyle' type='date' />
                    <label for="enddate">End Date*</label>
                    <input className='inputStyle' type='date' />
                    <label for="eventtype">Event Type*</label>
                    <select className='inputStyle'>
                        {
                            EventType.map((event) => {
                                return <option value={event}>{event}</option>
                            })
                        }
                    </select>
                    <label for="eventtype">Event Description *</label>
                    <textarea className='inputStyle' id="txtid" name="txtname" rows="4" cols="50" maxlength="200">
                    </textarea>
                    <div className='posterPrice'>
                        <div>
                            <label for="eventtype">Event Poster*</label>
                            <FileBase className='fileInput' type="file" multiple={false} />
                        </div>
                        <div>
                            <label for="price">Price &nbsp;</label>
                            <input className='inputStyle' type='number' placeholder='0' />
                        </div>
                    </div>
                    <center>
                        <button className='createEventbtn' >Create Event</button>
                    </center>
                </div>
            </div>
        </>
    )
}

export default EventCreate