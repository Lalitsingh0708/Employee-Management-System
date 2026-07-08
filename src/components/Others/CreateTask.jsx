import { useState } from "react";

export default function CreateTask() {

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    function submitHandler(e) {
        e.preventDefault();

        const task = {
            taskTitle,
            taskDescription,
            taskDate: date,
            category,
            active: false,
            newTask: true,
            failed: false,
            completed: false,
        };

        const data = JSON.parse(localStorage.getItem("employees"));

        data.forEach((ele) => {
            if (assignTo === ele.name) {
                ele.tasks.push(task);

                // Update task counts
                if (task.active) ele.taskCount.active++;
                if (task.newTask) ele.taskCount.newTask++;
                if (task.completed) ele.taskCount.completed++;
                if (task.failed) ele.taskCount.failed++;

                console.log(ele);
            }
        });

        localStorage.setItem("employees", JSON.stringify(data));

        setAssignTo("");
        setCategory("");
        setDate("");
        setTaskDescription("");
        setTaskTitle("");
    }
    return (
        <div className="flex justify-center">
            <form onSubmit={(e) => { submitHandler(e) }} className="w-[360px] bg-[#1c1c1c] rounded-lg p-6 space-y-4">

                <h2 className="text-xl font-semibold mb-2">
                    Create Task
                </h2>

                <div>
                    <h3 className="text-sm mb-2 text-gray-300">Task Title</h3>
                    <input
                        value={taskTitle}
                        onChange={(e) => {
                            setTaskTitle(e.target.value);
                        }
                        }
                        type="text"
                        placeholder="Make a UI design"
                        className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md px-3 py-2 outline-none placeholder:text-gray-500"
                    />
                </div>

                <div>
                    <h3 className="text-sm mb-2 text-gray-300">Description</h3>
                    <textarea
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value);
                        }
                        }
                        rows="4"
                        placeholder="Detailed Description of task (Max 500 words)"
                        className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md px-3 py-2 outline-none resize-none placeholder:text-gray-500"
                    ></textarea>
                </div>

                <div>
                    <h3 className="text-sm mb-2 text-gray-300">Date</h3>
                    <input
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }
                        }
                        type="date"
                        className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md px-3 py-2 outline-none"
                    />
                </div>

                <div>
                    <h3 className="text-sm mb-2 text-gray-300">Assign To</h3>
                    <input
                        value={assignTo}
                        onChange={(e) => {
                            setAssignTo(e.target.value);
                        }
                        }
                        type="text"
                        placeholder="Employee Name"
                        className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md px-3 py-2 outline-none placeholder:text-gray-500"
                    />
                </div>

                <div>
                    <h3 className="text-sm mb-2 text-gray-300">Category</h3>
                    <input
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }
                        }
                        type="text"
                        placeholder="Design, Development, etc."
                        className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md px-3 py-2 outline-none placeholder:text-gray-500"
                    />
                </div>

                <button
                    className="w-full bg-black hover:bg-gray-900 py-2 rounded-md font-semibold transition"
                >
                    Create Task
                </button>

            </form>
        </div>
    );
}