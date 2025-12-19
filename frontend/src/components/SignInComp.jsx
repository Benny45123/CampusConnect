import { useState } from "react"
import emailIcon_for_SignIn from "../assets/emailIcon_for_SignIn.png"
const SignInComp=()=>{
    const [rollClick,setRollClick]=useState(false);
    const handleRollClick=(e)=>{
    e.preventDefault();
    setRollClick(!rollClick);
}
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300 ">
            <div className="shadow-md p-15 pl-30 pr-30 bg-white h-99 overflow-y-auto">
                <h1 className="text-3xl text-center font-serif">Welcome Back to CampusConnect</h1>
               <div className="flex mt-5 mb-5 justify-center">
                <img src={emailIcon_for_SignIn} className="h-25 w-25"/>
               </div>
                <h1 className="text-center font-serif text-2xl">SignIn to your Account</h1>
                <p className="ml-3 mt-5 mb-2">RollNo/Email</p>
                <div className={`ml-3 `} >
                    <input type="text" className={` rounded-md p-1 pl-2 pr-30 focus:outline-none border`} placeholder="Enter your Rollno/Email"/>
                </div>
                { /* <p className="ml-3 my-2">Your Email</p>
                <div className={`ml-3 `} >
                    <input type="text" className={` rounded-md p-1 pl-2 pr-20  focus:outline-none border`} placeholder="Enter your email id"/>
                </div> */}
                <p className="ml-3 my-2">Your Password</p>
                <div className={`ml-3 `} >
                    <input type="text" className={` rounded-md p-1 pl-2 pr-30 focus:outline-none border`} placeholder="Enter your password"/>
                </div>
                <div className="flex justify-center">
                <button className="p-2 px-4 m-2 cursor-pointer text-white bg-gray-700 rounded-2xl">LogIn</button>
                </div>
            </div>
        </div>
    )
}
export default SignInComp;