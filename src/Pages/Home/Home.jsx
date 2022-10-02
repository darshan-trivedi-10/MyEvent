import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Details from '../../Component/Home/Details/Details'
import Event from '../../Component/Home/event/Event'
import Navbar from '../../Component/Home/navbar/navbar'
import { getAllEvent } from '../../Redux/actions/eventActions'
import './Home.css'


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        const findEvents = () => {
            dispatch(getAllEvent());
        }
        findEvents();
    }, [])

    const [city, setCity] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [search, setSearch] = useState(0);

    return (
        <>
            <Navbar />
            <Details city={city} setCity={setCity} category={category} setCategory={setCategory} date={date} setDate={setDate} setSearch={setSearch} />
            <Event city={city}setDate = {setDate} setSearch = {setSearch} date={date} category={category} search={search} />
        </>
    )
}

export default Home

