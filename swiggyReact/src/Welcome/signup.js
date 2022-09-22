import {useState} from 'react';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
function SignUp(){
  const navigate = useNavigate();
const initialValues={};
const [formValues,setFormValues] = useState(initialValues);
const [confirmpassword,setConfirmPassword] = useState("");
const [formErrors,setFormErrors] = useState({});
const [isSubmit,setIsSubmit] = useState(false);
const handleChange = (e) => {
  const {name,value}=e.target;
  setFormValues({...formValues,[name] :value});
}
const handleChange1 = (e) => {
  setConfirmPassword(e.target.value);
  console.log(confirmpassword);
}
const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues))
  setIsSubmit(true);
}
useEffect(()=>{
  if(JSON.stringify(formErrors)===JSON.stringify({}) && isSubmit){
    console.log(JSON.stringify(formValues));
    fetch('https://localhost:7110/Welcome/signup',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(formValues)
      }).then(res=>{
        if(res){
         
          console.log("New User is Created Successfully");
        }
      });
      navigate("/");
    }
},[formErrors])

const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  console.log(confirmpassword);
  if(!values.Email){
    errors.Email="Email is required";
  } else if(!regex.test(values.Email)){
    errors.Email="This is not a valid email";
  }
  if(!values.Password){
    errors.Password="Password is required";
  }else if (values.Password.length<8){
    errors.Password="Length of the password should be more than 7";
  }
  if(confirmpassword !== values.Password){
    errors.confirmpassword = "Confrom Password should match with password.";
  }
  console.log(errors);
  return errors;
}
 
return (
  <div className="Signup">
     <form onSubmit={handleSubmit}>
      <h1>SignUp</h1>
      <div className="ui divider"></div>
      <div className="ui form">
      <div className="field">
          <label>First Name: </label>
          <input type="text" name="FirstName" placeholder="First Name" value={formValues.Firstname} onChange={handleChange} required/>
        </div>
      <div className="field">
          <label>Last Name: </label>
          <input type="text" name="LastName" placeholder="Last Name" value={formValues.Lastname} onChange={handleChange} required/>
        </div>
        <div className="field">
          <label>Email: </label>
          <input type="email" name="Email" placeholder="Email" value={formValues.Email} onChange={handleChange} required/>
        </div>
        <p>
          {formErrors.Email}
        </p>
        <div className="field">
          <label>Password: </label>
          <input type="password" name="Password" placeholder="Password" value={formValues.Password} onChange={handleChange} required/>
        </div>
        <p>
          {formErrors.Password}
        </p>
        <div className="field">
          <label>Confirm Password: </label>
          <input type="password" name="confirmpassword" placeholder="Confirm Password" value={confirmpassword} onChange={handleChange1} required/>
        </div>
        <p>
          {formErrors.confirmpassword}
        </p>
        <button className='button'>Submit</button>
      </div>
    </form>
    </div>
    )
}
export default SignUp;