import emailIcon from "../assets/emailIcon.png"
import { useState } from "react"

const SignUpComp=()=>{
    const [rollClick,setRollClick]=useState(false);
    const handleRollClick=(e)=>{
    e.preventDefault();
    setRollClick(!rollClick);
}
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300 ">
            <div className="shadow-md p-15 pl-30 pr-30 bg-white h-99 overflow-y-auto">
                <h1 className="text-3xl text-center font-serif">Join CampusConnect</h1>
               <div className="flex mt-5 mb-5 justify-center">
                <img src={emailIcon} className="h-10 w-10"/>
               </div>
                <h1 className="text-center font-serif text-2xl">SignUp With Email</h1>
                <p className="ml-3 mt-5 mb-2">Your RollNo</p>
                <div className={`ml-3 `} >
                    <input type="text" className={` rounded-md p-1 pl-2 pr-20 focus:outline-none border`} placeholder="Enter your Rollno"/>
                </div>
                <p className="ml-3 my-2">Your Email</p>
                <div className={`ml-3 `} >
                    <input type="text" className={` rounded-md p-1 pl-2 pr-20  focus:outline-none border`} placeholder="Enter your email id"/>
                </div>
                <p className="ml-3 my-2">Your Password</p>
                <div className={`ml-3 `} >
                    <input type="text" className={` rounded-md p-1 pl-2 pr-20 focus:outline-none border`} placeholder="Enter your password"/>
                </div>
                <div className="flex justify-center">
                <button className="p-2 px-4 m-2 cursor-pointer text-white bg-gray-700 rounded-2xl">Create Account</button>
                </div>
            </div>
        </div>
    )
}
export default SignUpComp;