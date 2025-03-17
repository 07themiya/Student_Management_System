import React from "react";
import {useNavigate} from "react-router-dom";
import {GoogleOAuthProvider, GoogleLogin} from "@react-oauth/google";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();

    const handleGoogleSuccess = async(credentialResponse) => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/google", {
                token: credentialResponse.credential,
            });
            localStorage.setItem("token", res.data.token);  //save token in local storage
            console.log("Google Login Success:", res.data);
            navigate("/dashboard"); //redirect to dashboard
        } catch (error) {
            console.error("Google Login Failed:", error);
        }         
    };

    return (
        <GoogleOAuthProvider clientId="550440594989-6fa855ooputj3oe9khrphoo4depvhqal.apps.googleusercontent.com">
            <div className="flex justify-center items-center h-screen">
                <div className="p-8 shadow-lg rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">Adimn Login</h2>
                    <GoogleLogin onSuccess={handleGoogleSuccess} onError={() => console.log("Login Failed")}/>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;