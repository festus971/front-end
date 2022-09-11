import React,{useState} from 'react'

export const NewBooking = ({onAddBooking}) => {


    const [formData, setFormData] = useState({
        name: "", country: "", price: ""
      });
      function handleChange(e) {
        setFormData({ ...formData , [e.target.name]: e.target.value})
      }
      function handleSubmit(event) {
        event.preventDefault();
        fetch("https://magari-backend-apps.herokuapp.com/owners",{
          method: "POST",
          headers: {
          "Content-Type":"application/json",
          },
          body: JSON.stringify({name:formData.name,country:formData.country,price:formData.price})
        })
          .then(res => res.json())
          .then((data) => {
            onAddBooking(data)
            setFormData({...formData,name:"",country:"",price:""})
          })
      }

      return (
        <div>
        <form className="form" onSubmit={handleSubmit}>
          <input class="flex-auto text-lg font-semibold text-slate-900"onChange={handleChange} value={formData.name} name="name" placeholder="Name" />
          <input class="text-sm text-slate-700" onChange={handleChange} value={formData.country} name="country" placeholder="Country" />
          <input class="text-sm text-slate-700" onChange={handleChange} value={formData.price} name="price"  placeholder="Price" />
        <button class="h-10 px-6 font-semibold rounded-md bg-black text-white"type='submit'>Submit</button>
        </form>
        </div>
      )
    }

