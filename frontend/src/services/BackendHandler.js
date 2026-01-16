const Login=async ({rollNoOrEmailValue,passwordValue}) => {
    
    try{
    const data={rollNoOrEmail:rollNoOrEmailValue,password:passwordValue};
    const response=await fetch("http://localhost:3101/api/auth/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
        credentials:"include"
    });
    const result=await response.json();
    console.log(result);
    return {rollNo:result.rollNo,email:result.email};
}catch(error){
    console.error("Error during login:",error);
}
}
const Register=async ({emailValue,rollNoValue,passwordValue}) => {
    try{
        const data={email:emailValue,rollNo:rollNoValue,password:passwordValue};
        const response=await fetch("http://localhost:3101/api/auth/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data),
            credentials:"include"
        });
        const result=await response.json();
        console.log(result);
    }
    catch(error){
        console.error("Error during registration:",error);
    }
}
const checkLogin=async ()=>{
    try{
        const response=await fetch("http://localhost:3101/api/auth/checkLogin",{
            method:"GET",
            credentials:"include"
        });
        if (response.ok){
            const result=await response.json();
            console.log("User is logged in");

            return result;
        }
        else{
            console.log("User is not logged in");
            return null;
        }
    }
    catch(error){
        console.error("Error during login check:",error);
        return null;
    }
}
export {Login,Register,checkLogin};