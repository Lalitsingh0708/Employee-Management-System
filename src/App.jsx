import Login from "./components/Auth/Login"
import Employee from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useEffect, useState } from "react";
import { setLocalStorage , getLocalStorage } from "./utils/localStorage";

function App() {
  useEffect(()=>{
    // setLocalStorage() ;
    getLocalStorage() ;
  }) ;

  const [user , setUser] = useState(null) ;
  function handleLogin(email , password){
    if(email == 'admin@me.com' && password == '123'){
      setUser('admin') ;
    }else if(email == 'user@me.com' && password == '123'){
      setUser('employee') ;
    }
    else{
      alert('Invalid Credentials') ;
    }
  }

 

  return (
    <>
    {!user ? <Login handleLogin = {handleLogin}  /> : "" } 
    { user == 'admin' ? <AdminDashboard/> : <Employee/> }
    {/* <Employee/> */}
    {/* <AdminDashboard/> */}
    </>
  );
}



export default App
