import React, {useEffect, useState} from 'react';
import Space from "../Space/Space";

const SpaceX = () => {

    let [ship, setShip] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                const filter1 = value.filter(item => item.launch_year != '2020');
                setShip(filter1)

            })
    }, [])

    return (
        <div>
            {
                ship.map(value =>
                    <Space
                    value = {value}
                    key = {value.flight_number}/>

                )
            }
        </div>
    );
};

export default SpaceX;