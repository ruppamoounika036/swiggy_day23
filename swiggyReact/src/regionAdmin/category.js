import React from 'react';
import { useState,useEffect } from 'react';
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
export default function Category() {
    const header = new Headers({ "Access-Control-Allow-Origin": "*" });
    const [categories, setCategories] = useState([]);

   useEffect(() => {
      
         fetch('https://localhost:7110/RegionAdmin/GetCategory',{
        method: 'POST',
        headers:{'Content-type':'application/json'}
      }).then((res) => res.json())
      .then((data) => {
         console.log(data);
         setCategories(data);
      })
   }, []);
return(
    <>
    <ul id="myList"> 
    {         
          categories.map((item,k) => {           
           return (<li key={k}><a href="#">{item}</a></li> )        
          })
    }
    </ul>
    </>
)

}