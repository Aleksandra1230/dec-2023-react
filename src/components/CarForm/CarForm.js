import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../servis/car.service";

const CarForm = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all'});

    useEffect(()=> {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }

    }, [carForUpdate])

    useEffect(() => {
        if (carForUpdate){

        }
    }, [])

    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev=>!prev)
        reset()

    }



    const update = async (car) => {

    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>

            <input type="text" placeholder={'brand'} {...register('brand', {pattern:/^[a-zA-Za-zA-я]{1,20}$/})}/>
            {errors.brand&&<span>Бренд має складатись тільки з літер</span>}
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
            <button disabled={!isValid}>{carForUpdate?'Update':'Create'}</button>


        </form>
    );
};

export default CarForm;