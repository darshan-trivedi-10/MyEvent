import React from 'react';
import Navbar from '../../Component/Home/navbar/navbar';
import { EventType } from '../../utilities/eventType';
import FileBase from 'react-file-base64';
import './EventCreate.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../../Redux/actions/eventActions';


const EventCreate = () => {

    const user = useSelector((state) => state.authReducers.authData?.user);
    const eventState = useSelector((state) => state.eventReducers.eventData);
    const dispatch = useDispatch();
    const [eventData, setEventData] = useState({
        name: '',
        userId: '',
        eventCreater: '',
        startdate: '',
        enddate: '',
        eventType: '',
        location: '',
        eventDescription: '',
        eventPoster: '',
        price: 0
    });
    const [warning, setWarning] = useState('');

    const handleChange = (event) => {
        setEventData({ ...eventData, [event.target.name]: event.target.value });
        setWarning(true);
    }

    const checkDetails = () => {
        if (eventData.name.length === 0 || eventData.startdate === 0 || eventData.enddate === 0 || eventData.location === 0 || eventData.eventDescription === 0 || eventData.eventPoster === 0) {
            return true;
        }
        return false;
    }

    const resetForm = () => {
        setEventData({
            name: '',
            userId: '',
            eventCreater: '',
            startdate: '',
            enddate: '',
            eventType: '',
            location: '',
            eventDescription: '',
            eventPoster: '',
            price: 0
        })
    }

    const handleCreateEvent = (e) => {
        e.preventDefault();
        if (checkDetails()) {
            setWarning('Please Fill all the Details . . .');
        } else {
            dispatch(createEvent(eventData, user._id, user.companyname));
            setWarning(eventState);
            resetForm();
        }
    }



    return (
        <>
            <Navbar singIn={false} />
            <div className='eventCreate'>
                <h1>Create Your Event</h1>
                <div className='eventForm'>

                    <label htmlFor="eventname">Event Name*</label>
                    <input className='inputStyle' name='name' type='text' placeholder='Enter Event Name' value={eventData.name} onChange={handleChange} />

                    <label htmlFor="eventname">Event Locations or City*</label>
                    <input className='inputStyle' name='location' type='text' placeholder='Enter Event Location' value={eventData.location} onChange={handleChange} />

                    <label htmlFor="startdate">Start Date*</label>
                    <input className='inputStyle' name='startdate' type='date' value={eventData.startdate} onChange={handleChange} />

                    <label htmlFor="enddate">End Date*</label>
                    <input className='inputStyle' name='enddate' type='date' value={eventData.enddate} onChange={handleChange} />

                    <label htmlFor="eventtype">Event Type*</label>
                    <select className='inputStyle' value={eventData.eventType} name='eventType' onChange={handleChange}>
                        {
                            EventType.map((event) => {
                                return <option value={event}>{event}</option>
                            })
                        }
                    </select>

                    <label htmlFor="eventtype">Event Description *</label>
                    <textarea className='inputStyle' id="txtid" name="eventDescription" rows="4" cols="50" maxLength="200" value={eventData.eventDescription} onChange={handleChange}>
                    </textarea>

                    <div className='posterPrice'>
                        <div>
                            <label htmlFor="eventtype">Event Poster*</label>
                            <FileBase className='fileInput' type="file" multiple={false} onDone={({ base64 }) => setEventData({ ...eventData, eventPoster: base64 })} />
                        </div>
                        <div>
                            <label htmlFor="price">Price &nbsp;</label>
                            <input className='inputStyle' type='number' name='price' placeholder='0' price='price' value={eventData.price} onChange={handleChange} />
                        </div>
                    </div>

                    <div style={{ color: 'red', fontSize: '12px' }}>
                        {
                            warning
                        }
                    </div>

                    <center>
                        <button className='createEventbtn' onClick={handleCreateEvent}>Create Event</button>
                    </center>

                </div>
            </div>
        </>
    )
}

export default EventCreate