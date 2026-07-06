import React, { useState } from "react";

function Login({handleLogin}){
    const [email , setEmail] = useState("") ;
    const [password , setPassword] = useState("") ;

    function handleSubmit(e){
        e.preventDefault() ;
        // console.log(email , password ) ;
        handleLogin(email , password ) ;
        setEmail("") ;
        setPassword("") ;
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center" >
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e)=>handleSubmit(e)} className="flex flex-col items-center justify-center">
                    <input 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        required 
                        className=" text-xl text-white outline-none bg-transparent border-2 border-emerald-600 px-4 py-4 rounded-full placeholder:text-white" 
                        type="email" 
                        placeholder="Enter Your Email" 
                        />
                    <input 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        required 
                        className=" text-xl text-white outline-none bg-transparent border-2 border-emerald-600 px-4 py-4 rounded-full placeholder:text-white mt-4" 
                        type="password" 
                        placeholder="Enter Your Paassword" 
                    />
                    <button className="mt-4 text-xl text-white outline-none bg-emerald-600 px-4 py-4 rounded-full">Log in</button>
                </form>
            </div>
        </div>
    )
}
export default Login ;