import React from 'react';
import { Counter } from '../features/counter/Counter';
import { useState,useEffect } from 'react';

import ContactUs from '../user/email.js'
import Category from './category';
import RegionAdminBG from './regionadminbg';
import AddItems from './additems';


function RegionAdmin() {
    const [restuarant, setRestuarant] =useState('');
    const [category , setCategory]=useState('');
    const [restuarantid, setRestuarantid] =useState(0);
    const [categoryid , setCategoryid]=useState(1);
    const [categories, setCategories] = useState([]);
    const [isShown, setIsShown] = useState(false);

  const handleClick = (v) => {
    setIsShown(!isShown);
    console.log("clicked",v);
    console.log("rid",restuarantid,"cid",categoryid);
    setCategory(v);
  };

    
       useEffect(() => {
        fetch('https://localhost:7110/RegionAdmin/GetCategoryIdByName/'+category,
        {
       method: 'POST',
       headers:{'Content-type':'application/json', "Access-Control-Allow-Origin": "*",}
     }).then((res) => res.json())
     .then((data) => {
        console.log("gcid",data);
        setCategoryid(data);
     })  }, [category])

     useEffect(() => {
     fetch('https://localhost:7110/RegionAdmin/GetRestuarantIdByName/'+restuarant,
     {
       method: 'POST',
       headers:{'Content-type':'application/json'}
     }).then((res) => res.json())
     .then((data) => {
        console.log("rrid",data);
        setRestuarantid(data);
     })
  }, [restuarant]);
  useEffect(() => {
       
    fetch('https://localhost:7110/RegionAdmin/GetCategory',
    {
   method: 'POST',   
   headers:{'Content-type':'application/json', "Access-Control-Allow-Origin": "*",}
 }).then((res) => res.json())
 .then((data) => {
    console.log(data);
    setCategories(data);
 }) }, [])

return(
  // <ContactUs/>
  <>
  <form>
    <input type="text" name="restuarant-name" placeholder='restuarant name' onChange={(e) => {setRestuarant(e.target.value)  }}></input>
    {console.log(restuarant)}
  </form>
  {/* <Category/> */}

    {         
          categories.map((item,k) => {    
           
           return (<div key={k} onClick={(e)=>{handleClick(item)}} id="catg">{item}</div> )        
          })
    }
    {isShown && <AddItems restuarantid={restuarantid} categoryid={categoryid} show={setIsShown}/>  }
   {!isShown && <RegionAdminBG/>}
  </>
);
 
}

export default RegionAdmin;
