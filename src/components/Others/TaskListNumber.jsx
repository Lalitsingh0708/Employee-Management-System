
export default function TaskListNumber(){
    return (
        <div className="flex mt-10 justify-between gap-5 screen ">
            <div className="rounded-xl h-40 w-[45%] py-6 px-9 bg-red-400 ">
                <h2 className="text-3xl font-semibold"> 1</h2>
                <h2 className="text-xl font-medium" >New Tasks</h2>
            </div>

            
            <div className="rounded-xl h-40 w-[45%] py-6 px-9 bg-blue-400 ">
                <h2 className="text-3xl font-semibold"> 3</h2>
                <h2 className="text-xl font-medium" >Completed Tasks</h2>
            </div>

            <div className="rounded-xl h-40 w-[45%] py-6 px-9 bg-green-400 ">
                <h2 className="text-3xl font-semibold"> 0</h2>
                <h2 className="text-xl font-medium" >Accepted Tasks</h2>
            </div>

            <div className="rounded-xl h-40 w-[45%] py-6 px-9 bg-yellow-400 ">
                <h2 className="text-black text-3xl font-semibold"> 0</h2>
                <h2 className="text-black text-xl font-medium" >Failed Tasks</h2>
            </div>


        </div>
    );
}
