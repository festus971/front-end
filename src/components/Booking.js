import React,{useEffect, useState} from "react";
import { NewBooking } from "./NewBooking";

function Booking() {
const [cars, setCars] = useState([])


useEffect (()=>{
    fetch("http://localhost:9292/owners")
    .then((res)=>res.json())
    .then((json) =>
    setCars(json))
},[])
console.log(cars)

function onAddBooking(newCars){
    setCars([...cars, newCars])
}

    return (
        <div>
            <h2>{
            cars.map((car) => ( 
            <ol key = { car.id } >
                name: { car.name }, 
                country: { car.country }, 
                price: { car.price } 
                </ol>
            ))
        }</h2>
        <NewBooking onAddBooking = { onAddBooking}/>
        </div>
    )
    
}
export default Booking;