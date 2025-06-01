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
          "http://localhost:7000/api/task/fetchAllTasks",
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
          <div className="absolute top-4 right-4 w-[300px]">
  <div className="flex flex-col items-end gap-2">
    <p className="text-right text-sm">Go To Dashboard</p>
    <NavLink 
      to="/"
      className="border bg-blue-300 rounded-2xl px-4 py-2 hover:bg-blue-300 transition text-center w-[200px]"
    >
      Dashboard
    </NavLink>
  </div>
</div>
      <p>{message}</p>

      <ul>
        {tasks.map((task) => (
          <div key={task._id}>
            <li> {task.title} </li>
            <li> {task.description} </li>
            <li> {task.dueDate} </li>
            <li> {task.status} </li>
            <li> {task.priority} </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default AllTasks;
