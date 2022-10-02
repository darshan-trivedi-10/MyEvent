import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getUserEvent } from '../../Api/eventApi';
import EventCard from '../../Component/Home/event/eventCard/EventCard';
import Navbar from '../../Component/Home/navbar/navbar'
import './Profile.css'
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';


const Profile = () => {
    const user = useSelector((state) => state.authReducers.authData?.user);
    const [myEvent, setMyEvent] = useState([]);

    useEffect(() => {
        const findEvents = async () => {
            const data = await getUserEvent(user._id);
            setMyEvent(data);
        }
        findEvents();
    }, [])

    return (
        <>
            <Navbar />
            <div className='userDetails'>
                <pre>
                    Company Name : {user.companyname}
                </pre>
                <pre>
                    Name : {user.firstname} {user.lastname}
                </pre>
                <pre>
                    Email : {user.email}
                </pre>
            </div>
            <hr />
            <center>
                <pre style={{ marginTop: '-15px', fontSize: '35px' }}>Your Events</pre>
                <ClipLoader color={'blue'} loading={myEvent.length === 0} size={50} />
            </center>
            <div className='events'>
                {
                    myEvent?.map((event, id) => {
                        return <EventCard event={event} key={id} />
                    })
                }
            </div>
        </>
    )
}

export default Profile