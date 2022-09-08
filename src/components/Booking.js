import React,{useEffect, useState} from "react";
import { NewBooking } from "./NewBooking";
import { Delete } from "./Delete";

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
function handleDelete(deletedCars){
    const updatedCars = cars.filter((car) => car.id !== deletedCars.id )
    setCars(updatedCars)

}


    return (
        <div>
            {/* {
            cars.map((car) => ( 
            <ol key = { car.id } >
                <h3>{ car.name }</h3> 
                <p>{ car.country }</p>
                <p>{ car.price }</p> 
                </ol>
            ))
        } */}
        <ul className="cars">
        {cars.map((car) => (
          <Delete id={car.id} key={car.id} car={car}  onDelete={handleDelete} />
        ))}
      </ul>
        <NewBooking onAddBooking = { onAddBooking}/>
        {/* <button onClick={()=>DeleteBooking(cars)}>Delete Booking</button> */}
        </div>
    )
    
}
export default Booking;