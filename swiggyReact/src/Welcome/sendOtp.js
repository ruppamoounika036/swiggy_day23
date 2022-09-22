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

function SendOtp() {
  const [OTP, setOTP] = useState("");
  useEffect(()=>{
    const digits = '0123456789';
    let OTP1 = '';
    for (let i = 0; i < 4; i++) {
      OTP1 += digits[Math.floor(Math.random() * 10)];
    }
    console.log(OTP1);
    var templateParams = {
      name: 'James',
      notes: 'Your OTP'+OTP1
    };
    // emailjs.send('service_2u3h36j', 'template_4c5ngjr', templateParams)
    //   .then(function(response) {
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, function(error) {
    //     console.log('FAILED...', error);
    //   });
 
  },[]);
    

  return (
    <div> 
      <div>Enter Otp</div>
    <OTPInput
      value={OTP}
      onChange={setOTP}
      autoFocus
      OTPLength={4}
      otpType="number"
      disabled={false}
      secure
    />
    <ResendOTP handelResendClick={() => console.log("Resend clicked")} />
    </div>
  );
}
export default SendOtp;