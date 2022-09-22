import {useState} from 'react';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import  Login from "./login";
const clientId="72355585456-pfjgn5r2jkqjlov5g1t7i9ss2bousl5c.apps.googleusercontent.com";

function Signin(){
  const navigate = useNavigate();
      const initialValues = {};
      const [formValues,setFormValues] = useState(initialValues);
      const [formErrors,setFormErrors] = useState({});
      const [isSubmit,setIsSubmit] = useState(false);
      const handleChange = (e) => {
        const {name,value}=e.target;
        console.log("log innnn");
        setFormValues({...formValues,[name] :value});
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setIsSubmit(true);
      }
      useEffect(()=>{
        if(JSON.stringify(formErrors)===JSON.stringify({}) && isSubmit){
          console.log(JSON.stringify(formValues));
          fetch('https://localhost:7110/Welcome/signin',{
              method: 'POST',
              headers:{'Content-type':'application/json'},
              body: JSON.stringify(formValues)
            }).then(res=>res.json()).then(res=>{
              if(res=="1"){
                navigate("/loggedin");
                // console.log("New User is Created Successfully");
              }
            });
          }
      },[isSubmit])
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
        if(!values.Email){
          errors.Email="Email is required";
        } else if(!regex.test(values.Email)){
          errors.Email="This is not a valid email";
        }
        if(!values.Password){
          errors.Password="Password is required";
        }else if (values.Password.length<7){
          errors.Password="Length of the password should be more than 7";
        }
        return errors;
      }
      return (
        <div className="Signin">
           <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Email: </label>
                <input type="email" name="Email" placeholder="Email" value={formValues.Email} onChange={handleChange}/>
              </div>
              <p>
                {formErrors.Email}
              </p>
              <div className="field">
                <label>Password: </label>
                <input type="password" name="Password" placeholder="Password" value={formValues.Password} onChange={handleChange}/>
              </div>
              <a href="/forgotpassword">forgot password?</a><br></br>
              <p>
                {formErrors.Password}
              </p>
              <button className='button'>Submit</button>
            </div>
          </form>
          <a href="/signup">Signup</a><br></br>
          <Login />
          </div>
          )
}
export default Signin;