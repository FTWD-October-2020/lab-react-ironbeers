import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Beers = (props) => {
    let [beers, setBeers] = useState([]);

    useEffect(() => {
        Axios
            .get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then((res) => {
                setBeers(res.data)
            });
    }, [])

    const ShowBeers = () => {
        return beers.map(eachBeer => {
            return (
                <li>
                    <Link to={`/beers/${eachBeer._id}`}><img src={eachBeer.image_url} alt="Beer" /></Link>
                </li>
            )
        })
    }
    return (
        <div>
            <h2>All Beers</h2>
            <ShowBeers />
        </div>
    );
};

export default Beers;