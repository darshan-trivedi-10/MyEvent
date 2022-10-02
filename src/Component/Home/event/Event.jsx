/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useState } from 'react'
import './event.css'
import EventCard from './eventCard/EventCard'
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from 'react-redux'
import { getEventbyCity } from '../../../Api/eventApi';
import { Link } from 'react-router-dom';


const Event = ({ city, category, date, search, setSearch, setDate }) => {
  const event = useSelector((state) => state.eventReducers.allEvent)
  let [filterEvent, setFilterEvent] = useState([]);

  const isBetween = (startDate, endDate, currDate) => {
    startDate = new Date(startDate).toJSON().slice(0, 10);
    endDate = new Date(endDate).toJSON().slice(0, 10);
    currDate = new Date(currDate).toJSON().slice(0, 10);
    return ((currDate >= startDate) && (currDate <= endDate));
  }

  const eventbyCity = async (city) => {
    let data = await getEventbyCity(city);
    setFilterEvent(data)
  }

  useEffect(() => {
    if (search !== 0) {
      // Search By Date
      if (search === 2) {
        if (date.length !== 0) {
          console.log(date)
          let tempEvent = event.filter((event) => {
            return isBetween(event.startdate, event.enddate, date);
          })
          setFilterEvent(tempEvent)
          if (tempEvent.length === 0) {
            setSearch(0)
            setDate('')
            alert('Event Not Found');
          }
        } else {
          alert('Please Enter Correct Date')
        }
      } else if (search === 1) {
        if (city.length === 0 && category.length === 0) {
          alert('Please Enter Correct City and Category')
          setSearch(false);
        } else if (city.length === 0) {
          let tempEvent = event.filter((event) => {
            return event.eventType == category;
          })
          if (tempEvent.length === 0) {
            alert('Event not Fount . . . ');
            setSearch(false);
          } else {
            setFilterEvent(tempEvent);
          }
        } else if (category.length === 0) {
          eventbyCity(city);
          if (filterEvent.length === 0) {
            alert('Event not Fount . . . ');
            setSearch(false);
          }
        } else {
          // find by both
          eventbyCity(city);
          if (filterEvent.length === 0) {
            alert('Event not Fount . . . ');
          } else {
            let tempEvent = filterEvent.filter((event) => {
              return event.eventType == category;
            })
            if (tempEvent.length === 0) {
              alert('Event not Fount . . . ');
              setSearch(false);
            } else {
              setFilterEvent(tempEvent);
            }
          }
        }
      }
    }
    if (search === 0) {
      filterEvent = [];
    }
  }, [search])


  return (
    <>
      <div className='events'>
        <ClipLoader color={'blue'} loading={event.length === 0} size={50} />
        {
          (search ? filterEvent : event)?.map((event, id) => {
            return <EventCard event={event} key={id} />
          })
        }
      </div>
    </>
  )
}

export default Event;