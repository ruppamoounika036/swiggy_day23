import {useState} from 'react';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { send } from 'emailjs-com';
function ForgotPassword(){
    const navigate = useNavigate();
    const initialValues={};
    const [formValues,setFormValues] = useState(initialValues);     
    const [formErrors,setFormErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const handleChange = (e) => {
        const {name,value}=e.target;
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
          fetch('https://localhost:7110/Welcome/emailcheck',{
              method: 'POST',
              headers:{'Content-type':'application/json'},
              body: JSON.stringify(formValues)
            }).then(res=>res.json()).then(res=>{
              if(res=="1"){
                navigate("/sendOtp");
                
                alert("otp sent");
              }
              else{
                navigate("/signup");
                alert("User Does not exist! Please Signup.");
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
          errors.Email="This is not a valid email. Please Enter Valid email";
        }
        return errors;
      }
    return(
            <div className="ForgotPassword">
               <form onSubmit={handleSubmit}>
                <h1>Password set</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                  <div className="field">
                    <label>Email: </label>
                    <input type="email" name="Email" placeholder="Email" value={formValues.Email} onChange={handleChange}/>
                  </div>
                  <p>
                    {formErrors.Email}
                  </p>
                  <button className='button'>Get Otp</button>
                </div>
              </form>
              </div>
              );
}
export default ForgotPassword;