import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
function TaskList({data}) {
    // console.log(data.tasks.active)
    return (
        <div id="tasklist" className="overflow-x-auto flex items-center justify-start gap-5 flex-nowrap h-[53%] w-full  rounded-xl py-5 mt-10">
            {/* <AcceptTask/>
            <NewTask/>
            <CompletedTask/>
            <FailedTask/> */}
            {data.tasks.map((task, index) => {
                if(task.active){
                    return <AcceptTask key={index} data={task} />
                }

                if(task.newTask){
                    return <NewTask key={index} data={task} />
                }

                if(task.completed){
                    return <CompletedTask key={index} data={task} />
                }

                if(task.failed){
                    return <FailedTask key={index} data={task} />
                }

                return null;
            })}
            
          
            
            
            
            
            
            
            
            
            
            
          
          
        </div>
    );
}

export default TaskList;