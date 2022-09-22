import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
function Homepage()
{
    var [FutureRestaurants,SetFutureRestaurants]=useState([]);

    useEffect(()=>{
          fetch('https://localhost:7110/SuperAdmin/get-restaurants',{
          method: 'GET',
          headers:{'Content-type':'application/json'},
         }).then((res)=>
            res.json()
        ).then((data)=>{console.log(data);SetFutureRestaurants(data)})
    },[]);

    return(
        <div className="ParentCards">
             <h1>These are the upcoming Restaurants</h1>
            <div class="d-flex flex-wrap overflow-auto">
                {
                  FutureRestaurants.map((Restaurant,index)=>{
                    return(
                        <div className="Restcards" key={index}>
                    <div> Number:{index+1}</div>
                    <div> Name:{Restaurant.restaurantname}</div>
                    <div> Region:{Restaurant.region}</div>
                    <div> Date Of launch:{Restaurant.dateoflaunch}</div>
                    </div>
                    )
                  })
                }
                
            </div>
        </div>
    )
}
export default Homepage;