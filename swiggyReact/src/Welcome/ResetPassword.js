import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
function ResetPassword(){
  const navigate = useNavigate();
  const initialValues = {};
  const [formValues,setFormValues] = useState(initialValues);
  const [ConfirmPassword,setConfirmPassword] = useState("");
  const handleChange = (e) => {
    const {name,value}=e.target;
    setFormValues({...formValues,[name] :value});
  }
    const handleChange1 = (e) =>{
        setConfirmPassword(e.target.value);
    }
    const handleSubmit = () => {
      if(formValues.Password == ConfirmPassword){
            fetch('https://localhost:7110/Welcome/passwordset',{
                method: 'POST',
                headers:{'Content-type':'application/json'},
                body: JSON.stringify(formValues)
                }).then(res=>res.json()).then(res=>{
                  if(res=="1"){
                    navigate('/');
                    alert("Password Reset Successful. Please Sign In.");
                  }
                });
              }
      }
    return(
        <div>
        <form onSubmit={handleSubmit}>
        <div>ResetPassword</div>
        <div className="field">
        <label>Password: </label>
        <input type="password" name="Password" placeholder="Password" value={formValues.Password} onChange={handleChange}/>
        </div>
        <div className="field">
        <label>Confirm Password: </label>
        <input type="password" name="ConfirmPassword" placeholder="ConfirmPassword" value={ConfirmPassword} onChange={handleChange1}/>
        </div>
        </form>
        </div>
        
    )
}
export default ResetPassword;
