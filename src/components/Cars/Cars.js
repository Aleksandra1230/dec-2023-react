import React, {useEffect, useState} from 'react';
import Car from "../Car/Car";
import {carService} from "../../servis/car.service";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
   const [carForUpdate, setCarForUpdate] = useState(null);

    
    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))

    }, [allCars])
    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;