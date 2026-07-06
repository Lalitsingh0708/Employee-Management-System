export default function CreateTask() {
    return (
        <div className="flex justify-center">
            <form className="w-[360px] bg-[#1c1c1c] rounded-lg p-6 space-y-4">

                <h2 className="text-xl font-semibold mb-2">
                    Create Task
                </h2>

                <div>
                    <h3 className="text-sm mb-2 text-gray-300">Task Title</h3>
                    <input
                        type="text"
                        placeholder="Make a UI design"
                        className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md px-3 py-2 outline-none placeholder:text-gray-500"
                    />
                </div>

                <div>
                    <h3 className="text-sm mb-2 text-gray-300">Description</h3>
                    <textarea
                        rows="4"
                        placeholder="Detailed Description of task (Max 500 words)"
                        className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md px-3 py-2 outline-none resize-none placeholder:text-gray-500"
                    ></textarea>
                </div>

                <div>
                    <h3 className="text-sm mb-2 text-gray-300">Date</h3>
                    <input
                        type="date"
                        className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md px-3 py-2 outline-none"
                    />
                </div>

                <div>
                    <h3 className="text-sm mb-2 text-gray-300">Assign To</h3>
                    <input
                        type="text"
                        placeholder="Employee Name"
                        className="w-full bg-[#2a2a2a] border border-gray-700 rounded-md px-3 py-2 outline-none placeholder:text-gray-500"
                    />
                </div>

                <div>
                    <h3 className="text-sm mb-2 text-gray-300">Category</h3>
                    <input
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