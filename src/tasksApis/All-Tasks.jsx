import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function AllTasks() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          return alert("token is not found");
        }

        const res = await fetch(
          "http://localhost:7000/api/task/fetchallTasks",
          {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await res.json();

        if (res.ok) {
          setMessage(data.msg), setTasks(data.tasks);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center m-1">
        <div className="flex items-start">
          <p className="text-2xl">{message}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <p className="text-right text-sm ">Go To Dashboard</p>
          <NavLink
            to="/"
            className="border bg-blue-300 rounded-2xl px-4 py-2 hover:bg-blue-300 transition text-center w-[180px]"
          >
            Dashboard
          </NavLink>
        </div>
      </div>



<div className="overflow-x-auto text-center">
  <ul className="min-w-[800px]">
    {tasks.map((task) => (
      <div key={task._id} className="bg-blue-100 m-6 border flex items-center">
    
        <div className="w-1/4 p-2 overflow-y-auto max-h-[100px]">
          <p className="border bg-slate-300 font-bold">Title</p>
          <p className="break-words">{task.title}</p>
        </div>

   
        <div className="w-2/4 p-2 overflow-y-auto max-h-[100px]">
          <p className="border bg-slate-300 font-bold">Description</p>
          <p className="break-words">{task.description}</p>
        </div>

        
        <div className="w-1/6 p-2">
          <p className="border bg-slate-300 font-bold">Due-Date</p>
          <p>{task.dueDate}</p>
        </div>

        <div className="w-1/6 p-2">
          <p className="border bg-slate-300 font-bold">Status</p>
          <p>{task.status}</p>
        </div>

        <div className="w-1/6 p-2">
          <p className="border bg-slate-300 font-bold">Priority</p>
          <p>{task.priority}</p>
        </div>
      </div>
    ))}
  </ul>
</div>

      </div>
   
  );
}

export default AllTasks;
