import React, { useState, useEffect } from 'react'
import Axios from 'axios';





const OneBeer = (props) => {
    console.log(props)
    let [beer, setBeer] = useState({});
    //https://ih-beers-api2.herokuapp.com/beers/5fb6a86265b9c209606e10f4
    console.log(beer)
    useEffect(() => {
        Axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerId}`)
            .then((res) => {
                setBeer(res.data)
            });
    }, [])
    return (
        <div>
            <h1>{beer.name}</h1>
            <img src={beer.image_url} />
        </div>
    )
}
export default OneBeer;