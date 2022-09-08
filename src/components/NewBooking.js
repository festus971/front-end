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
        fetch("http://localhost:9292/owners",{
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
          <input onChange={handleChange} value={formData.name} name="name" placeholder="Name" />
          <input onChange={handleChange} value={formData.country} name="country" placeholder="Country" />
          <input onChange={handleChange} value={formData.price} name="price"  placeholder="Price" />
        <button type='submit'>Submit</button>
        </form>
        </div>
      )
    }

