import { useState ,useEffect} from "react";
import { BrowserRouter as Router, Route,Routes, useNavigate } from "react-router-dom";


export default function AddRegionAdmin()
{
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const nav=useNavigate();
    const [admindetails,Setadmindetails]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
        Password:"",
        Role:""
    });
   

    const HandleChange=(e)=>
    {
        const {name,value}=e.target;
        Setadmindetails({...admindetails,[name]:value});
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(admindetails))
        setIsSubmit(true);
        // nav("/");
      }

    useEffect(()=>{
    if(Object.keys(formErrors).length ===0 && isSubmit){
        console.log("useeffect");
      fetch('https://localhost:7110/SuperAdmin/add-region',{
      method: 'POST',
      headers:{'Content-type':'application/json'},
        body: JSON.stringify(admindetails)
     }).then(res=>{
      if(res){
        alert("Added Region Admin Successfully");
      }
    })}},[formErrors]);
   

    const validate = (values) => {
        const errors = {};
        // const USER_REGEX = /^[a-zA-Z0-9._:$!%-]{3,23}$/;
        const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
        const EMAIL_REGEX = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
        if(!values.FirstName){
            errors.FirstName="FirstName is required";
          } 
        if(!values.Role){
            errors.Role="Role is required";
          } 
        if(!values.LastName){
            errors.LastName="LastName is required";
        } 
        if(!values.Email){
          errors.Email="Email is required";
        } 
        else if(!EMAIL_REGEX.test(values.Email)){
          errors.Email="This is not a valid email";
        }
        if(!values.Password){
          errors.Password="Password is required";
        }
        else if(!PWD_REGEX.test(values.Password)){
            errors.Password="This is not a valid Password"
        }
        console.log(errors);
        return errors;
      }

    return(
       <div>
        <form onSubmit={HandleSubmit}>
       
        <div>
        <label htmlFor="fname">
            Region Admin FirstName:
        <input type="text" id="fname" onChange={HandleChange} name="FirstName" value={admindetails.FirstName}/>
        </label>
        <small>{formErrors.FirstName}</small>
        </div>

        <div>
        <label htmlFor="lname">
            Region Admin LastName:
        <input type="text" id="lname" onChange={HandleChange} name="LastName" value={admindetails.LastName}/>
        </label>
        <small>{formErrors.LastName}</small>
        </div>

        <div>
        <label htmlFor="Email">
            Region Admin Email:
        <input type="text" id="Email" onChange={HandleChange} name="Email" value={admindetails.Email}/>
        </label>
        <small>{formErrors.Email}</small>
        </div>

        <div>
        <label htmlFor="pswd">
            Password:
        <input type="password" id="pswd" onChange={HandleChange} name="Password" value={admindetails.Password}/>
        </label>
        <small>{formErrors.Password}</small>
        </div>
     

        <div>
            <label>Select Role
            <select onChange={HandleChange} name="Role" value={admindetails.Role}>
                <option style={{display:"none"}}  >
                </option>
                <option >Region Admin</option>
            </select>
            </label>
            <small>{formErrors.Role}</small>
        </div>

        <div>
            <label>
                <button type="Submit">Submit</button>
            </label>
        </div>
        </form>
       </div>
       
    )
}
