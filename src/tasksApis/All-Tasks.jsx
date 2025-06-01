import { useEffect, useState } from "react";

function AllTasks() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token =  localStorage.getItem("token");

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
      <p>{message}</p>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}> {task.title} </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTasks;
