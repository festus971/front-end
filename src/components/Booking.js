import React,{useEffect, useState} from "react";

function Booking() {
const [cars, setcars] =useState([])

useEffect (()=>{
    fetch("http://localhost:9292/owners")
    .then((res)=>res.json())
    .then((json) =>
    setcars(json))
},[])
console.log(cars)




    return (
        <div>
            <h1>{
            cars.map((car) => ( 
            <ol key = { car.id } >
                name: { car.name }, 
                country: { car.country }, 
                price: { car.price } 
                </ol>
            ))
        }</h1>
        
        </div>
    )
    
}
export default Booking;