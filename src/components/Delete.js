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
          <form class="flex-auto p-6">
        <div className='grid grid-flow-col grid-rows-2 grid-cols-3 gap-8'>
          <h3 class="flex-auto text-lg font-semibold text-slate-900">{car.name}</h3>
          <p class="text-sm text-slate-700">{car.country}</p>
          <p class="text-sm text-slate-700">{car.price}</p>
          <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit" onClick={handleDeleteClick}>Delete</button>
          </div>
          </form>
        </div>
      )

}
