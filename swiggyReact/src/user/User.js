import React from 'react';
import { useState, useEffect } from 'react';
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
export default function User() {

    const [show, setShow] = useState(false);
    const [search, setSearch] = useState(false);
    const handleClick = (v) => {
        setShow(!show);
        setSearch(v);
      };
      const searching = () => {
        
      };
   var categories=["restuarant","Region","Food type"]
    return (
        <>
        {         
          categories.map((item,k) => {    
           
           return (<div key={k} onClick={(e)=>{handleClick(item)}}>{item}</div> )        
          })
    }
    {show &&
    <> 
    <input type="search" placeholder={"enter "+search+" name"}/>  
    <button onClick={searching}>Search</button>
    </>
    }
        </>
    )
}