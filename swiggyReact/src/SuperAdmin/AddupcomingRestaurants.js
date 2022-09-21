import React, { useEffect } from "react";
import {useState} from "react"
function AddUpcomingRestaurants()
{
    const [Restaurants,SetRestaurants]=useState({
        Restaurantname:"",
        Region:"",
        Dateoflaunch:new Date()
    });

   const [isSubmit,setIsSubmit]=useState(false);
   
    const HandleChange=(e)=>
    {
        const {name,value}=e.target;
        SetRestaurants({...Restaurants,[name]:value})
    }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        setIsSubmit(true);
    }
    useEffect(()=>{
        if(isSubmit){
          fetch('https://localhost:7110/SuperAdmin/add-restaurant',{
          method: 'POST',
          headers:{'Content-type':'application/json'},
            body: JSON.stringify(Restaurants)
         }).then(res=>{
          if(res){
            alert("Upcoming Restaurant added Successfully");
          }
        })
    }},[isSubmit]);

    return(
        <div>
            <form onSubmit={HandleSubmit}>
           <div>
        <label htmlFor="restname">
            Restaurant Name
        <input type="text" id="restname"  name="Restaurantname"  value={Restaurants.Restaurantname} onChange={HandleChange}/>
        </label>
        {/* <small>{formErrors.FirstName}</small> */}
        </div>
        <div>
        <label htmlFor="restregion">
            Region Name
        <input type="text" id="restregion"  name="Region" onChange={HandleChange} value={Restaurants.Region}/>
        </label>
        {/* <small>{formErrors.FirstName}</small> */}
        </div>
        <div>
        <label htmlFor="launch">
            
        <input type="Date" id="launch"  name="Dateoflaunch" onChange={HandleChange} value={Restaurants.Dateoflaunch}/>
        </label>
        {/* <small>{formErrors.FirstName}</small> */}
        </div>
        <div>
            <label>
                <input type="submit">
                </input>
            </label>
        </div>
        </form>
        </div>
    )
}
export default AddUpcomingRestaurants;