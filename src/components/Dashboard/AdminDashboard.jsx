import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";
export default function AdminDashboard() {
  return (
    <div className="min-h-screen w-full bg-[#111] text-white p-10">
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  );
}