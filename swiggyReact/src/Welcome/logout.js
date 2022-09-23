import {GoogleLogout} from  'react-google-login';
import {useNavigate} from 'react-router-dom';
const clientId="72355585456-pfjgn5r2jkqjlov5g1t7i9ss2bousl5c.apps.googleusercontent.com";
const clientScope="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";
function LogOut(){ 
    const navigate = useNavigate();
    const onSuccess=()=>{
        console.log("logout Successful"); 
        navigate("/");   
    }
    return(
        <div>
            <div id="signOutButton">
                <GoogleLogout
                clientId={clientId}
                clientScope={clientScope}
                buttonText="LogOut"
                onLogoutSuccess={onSuccess}
                />
            </div>
        </div>  
    )
}
export default LogOut;