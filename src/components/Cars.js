// import React, { useEffect,useState } from "react";

// function Car() {
//     const [vehicles, setVehicles] = useState([])

//     useEffect (()=>{
//         fetch("http://localhost:9292/cars")
//         .then((res)=>res.json())
//         .then((json) =>
//         setVehicles(json))
//     },[])
//     console.log(vehicles)

//     return (
//         <div>
//             <h2>{
//             vehicles.map((vehicle) => ( 
//             <ol key = { vehicle.id } >
//                  { vehicle.model } 
//                 </ol>
//             ))
//         }</h2> 
//         </div>
//     )
    
// }
// export default Car;