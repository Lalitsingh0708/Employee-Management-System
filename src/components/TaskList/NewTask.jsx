function NewTask({data}) {
    return (
        <div className=" flex-shrink-0 h-full w-[300px] bg-green-400 rounded-xl ">
            <div className="flex items-center justify-between px-3 py-1 rounded-t-xl ">
                <h3 className="bg-red-600" >High</h3>
                <h3 className="text-sm">06 Jul 2026</h3>
            </div>
            <h2 className="mt-5 ml-5  text-2xl font-semibold"> {data.taskTitle}</h2>
            <p className="mt-1 ml-5 text-sm">  {data.taskDescription}
            </p>
            <div className="flex justify-between mt-6" >
                <button className="ml-5  bg-pink-500 py-1 px-2 text-sm">Accept Task</button>
            </div>

        </div>
    );
}

export default NewTask ;