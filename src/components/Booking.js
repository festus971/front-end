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
        <ul className="divide-y divide-gray-200">
        {cars.map((car) => (
          <Delete id={car.id} key={car.id} car={car}  onDelete={handleDelete} />
        ))}
      </ul>
        <NewBooking onAddBooking = { onAddBooking}/>
        </div>
    )
    
}
export default Booking;