import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

export default function AllTask() {
    const authData = useContext(AuthContext) ;
    // console.log(authData.employees) ;
  return (
    <div id="all-tasks" className="p-5 bg-[#1c1c1c1] mt-5 rounded h-60 ">
        <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
            <h2 className="w-1/5 " >Employee Name </h2>
            <h3 className="w-1/5 ">New Task </h3>
            <h5 className="w-1/5 ">Active Task</h5>
            <h5 className="w-1/5 ">Completed</h5>
            <h5 className="w-1/5 ">Failed</h5>
        </div>
        <div className="h-[100%] overflow-auto">
            {
                authData.employees.map((task , idx)=>{
                    return <div key={idx} className="bg-emerald-300 mb-2 py-2 px-4 flex justify-between rounded">
                                <h2 className="w-1/5 font-bold" >{task.name} </h2>
                                <h3 className="w-1/5 font-semibold text-blue-800">{task.taskCount.newTask} </h3>
                                <h5 className="w-1/5 font-semibold text-pink-600">{task.taskCount.active}</h5>
                                <h5 className="w-1/5 font-semibold text-green-800">{task.taskCount.completed}</h5>
                                <h5 className="w-1/5 font-semibold text-red-600">{task.taskCount.failed}</h5>
                            </div>
                })
            }
        </div>
        
        
        
        
    </div>
  ) ;
}