import React from 'react';
import RegionAdminBG from './regionadminbg';
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
export default function Category() {
    let data = ["Ram", "Shyam", "Sita", "Gita"];
  
    let list = document.getElementById("myList");

    data.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
    //   list.appendChild(li);
    console.log(item);
    });
    console.log("0000000000");
   
return(
    <>
    <ul id="myList">

    </ul>
    </>
)

}