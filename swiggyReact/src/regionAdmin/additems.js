import React from 'react';
import { useState, useEffect } from 'react';
import { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
export default function AddItems(props) {
    // const inpvals={}
    const [items, setItems] = useState([{}]);
    // const [firstadd,setfirstadd]=useState(false)
    const addInputs = (e) => {
        console.log("input boxes added");
        const {name1,value}=e.target;
        // if(firstadd)
        // {
        setItems([...items, {[name1]:value}]);
        // }
        // setfirstadd(true);
    };

    const sendItemDetails=(e)=>
    {
        items.shift();
            console.log("send",JSON.stringify(items))
            console.log(JSON.stringify({ 'items':JSON.stringify(items)}));
            fetch('https://localhost:7110/RegionAdmin/PostItemDetails',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(items)
            }).then((res) =>{
                console.log("senditems",res);
            }) ;
        props.show(false);
    }
    const removeInp = (i) => {
        console.log("remove inp", i)
        const list = [...items];
        list.splice(i, 1);
        setItems(list);
    }
    const inputChange = (e, i) => {
        let newFormValues = [...items];
        newFormValues[i][e.target.name] = e.target.value;
        newFormValues[i]['CategoryId'] = props.categoryid;
        newFormValues[i]['RestuarantId'] = props.restuarantid;
        setItems(newFormValues);
    }
    return (
        <>
        {console.log("hiii")}
        {/* <form onSubmit={sendItemDetails}> */}
            <button onClick={addInputs}>Add Items</button>
            {items.map((x, i) => {

                return (
                    <>
                        {(i > 0) &&
                            <div >
                                <input key={"ItemName" + i} type="text" value={x.ItemName} placeholder="item name" name="ItemName" onChange={(e) => { inputChange(e, i) }} required />
                                <input key={"ItemStock" + i} type="num" value={x.ItemStock} placeholder="item stock" name="ItemStock" onChange={(e) => { inputChange(e, i) }} required />
                                <input key={"ItemPrice" + i} type="num" value={x.ItemPrice} placeholder="item price" name="ItemPrice" onChange={(e) => { inputChange(e, i) }} required/>
                                <button className="remove" onClick={() => { removeInp(i) }}>X</button>
                                {/* <div>{firstadd}</div> */}
                            </div>

                        }

                    </>
                )

            })
            

            }
             <button  onClick={sendItemDetails}>Add All</button>
        </>



    )
}