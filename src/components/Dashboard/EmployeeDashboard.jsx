import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../TaskList/TaskList";
function Employee(){
    return (
        <div className="p-10 bg-[#1c1c1c1] h-screen ">
            <Header/>
            <TaskListNumber/> 
            <TaskList/>
        </div>
    ) ;
}

export default Employee ;