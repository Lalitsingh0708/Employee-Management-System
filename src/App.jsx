import Login from "./components/Auth/Login"
import Employee from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { useContext, useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }
    getLocalStorage();
  }, []);

  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);
  // console.log(authData) ;

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      // console.log(userData) ;
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  function handleLogin(email, password) {
    if (email == 'lalitbaghel0708@gmail.com' && password == '123') {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email == email && e.password == password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
      }
    }
    else {
      alert('Invalid Credentials');
    }
  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <Employee data={LoggedInUserData} /> : null)}
      {/* <Employee/> */}
      {/* <AdminDashboard/> */}
    </>
  );
}



export default App
