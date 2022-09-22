import {gapi} from 'gapi-script';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import { GoogleLogin } from 'react-google-login';
const clientId="72355585456-pfjgn5r2jkqjlov5g1t7i9ss2bousl5c.apps.googleusercontent.com";
const clientScope="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";
function Login(){
    const navigate = useNavigate();
    useEffect(()=>{
        function start(){
          gapi.client.init({
            clientId:clientId,
            scope:""
          })
        };
        gapi.load('client:auth2',start);
      })
    const onSuccess=(res)=>{
        console.log("Login Success ",res.profileObj);
        const initialValues={Firstname:"",Lastname:"",Email:"",Password:""};
        console.log(res.profileObj.familyName);
        if(res.profileObj.familyName==undefined){
        initialValues.Firstname="";
        }
        else{
            initialValues.Firstname=res.profileObj.familyName;
        }
        initialValues.Lastname=res.profileObj.givenName;
        initialValues.Password=res.profileObj.googleId;
        initialValues.Email=res.profileObj.email;
        console.log(initialValues);
        fetch('https://localhost:7110/Welcome/signup',{
            method: 'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(initialValues)
        }).then(res=>{
        if(res){
            console.log("New User is Created Successfully");
        }
        });  
        navigate('/loggedin');
    }
    const onFailure=(res)=>{
        console.log("Login Failed,current User: ",res.profileObj);
    }
    return(
    <GoogleLogin
            clientId={clientId}
            clientScope={clientScope} 
            buttonText="Login with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            redirectUri='/loggedin'
            cookiePolicy={'single_host_origin'} 
            />
    ); 
}
export default Login;