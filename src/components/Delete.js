import React from 'react'

export const Delete = ({onDelete, car}) => {

    function handleDeleteClick() {
        fetch(`http://localhost:9292/owners/${car.id}`, {
          method: "DELETE",
        })
          .then((resp) => resp.json())
          .then(() => onDelete(car));
      }
      return (
        <div>
          <span>{car.name}</span>
          <span>{car.country}</span>
          <span>{car.price}</span>
          <button className="remove" onClick={handleDeleteClick}>Delete</button>
          <p></p>
        </div>
      )

}
