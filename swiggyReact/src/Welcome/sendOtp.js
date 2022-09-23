import {useEffect, useState} from 'react';
import emailjs from 'emailjs-com';
// import {useEffect} from 'react';
// import {useNavigate} from 'react';
// function SendOtp(){
//     // const navigate = useNavigate();
//     const [otp,setOtp] = useState(""); 
//     const [isSubmit,setIsSubmit] = useState(false); 
//     const handleChange = (e) => {
//         // const {name,value}=e.target;
//         console.log(e.target.value);
//         setOtp(e.target.value);
//       }
//       const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(otp);
//         setIsSubmit(true);
//       }
//       useEffect(()=>{
//         if(isSubmit){
//           console.log("otp msg");
//           // fetch('https://localhost:7110/Welcome/signin',{
//           //     method: 'POST',
//           //     headers:{'Content-type':'application/json'},
//           //     body:  otp
//           //   }).then(res=>res.json()).then(res=>{
//           //     if(res=="0"){
//           //       navigate("/signup");
//           //       alert("User Does not exist! Please Signup.");
//           //     }
//             //   else{
//             //     navigate
//             //   }
//             // });
//           }
//       },[isSubmit])
//       return(
//         <div className="Otp">
//                <form onSubmit={handleSubmit}>
//                 <h1>Otp</h1>
//                 <div className="ui divider"></div>
//                 <div className="ui form">
//                   <div className="field">
//                     <label>Otp: </label>
//                     <input type="text" name="otp" placeholder="please enter otp" value={otp} onChange={handleChange} required/>
//                   </div>
//                   <button className='button'>Submit</button>
//                 </div>
//               </form>
//               </div>
//       )
// }
import OTPInput, { ResendOTP } from "otp-input-react";
import { Navigate, useParams } from 'react-router';
import {useNavigate} from 'react-router-dom';
import ResetPassword from './ResetPassword';

function SendOtp() {
  const navigate = useNavigate();
  const [OTP, setOTP] = useState("");
  const otp = useParams();
  const handleSubmit = () =>{
  if(OTP == otp.id){
    navigate("/resetPassword");
  }
  else{
    alert("Wrong Otp");
  }
}

  return (
    <div> 
      <div>Enter Otp</div>
      <form onSubmit={handleSubmit}>
    <OTPInput
      value={OTP}
      onChange={setOTP}
      autoFocus
      OTPLength={4}
      otpType="number"
      disabled={false}
      secure
    />
    <button className='button'>Submit</button>
    </form>
    <ResendOTP handelResendClick={() => console.log("Resend clicked")} />
    </div>
  );
}
export default SendOtp;