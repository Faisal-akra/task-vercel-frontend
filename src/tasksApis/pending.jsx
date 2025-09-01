import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function PendingTask() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");




  useEffect(() => {
    if (!token) {
      alert("Token is expired or missing");
      return;
    }
    pendingTasks();
  }, [token]);



  
  const pendingTasks = async () => {
    try {
      const res = await fetch(
        "http://localhost:9000/api/task/fetchTaskByStatus/Pending",
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
        if (data.tasks && data.tasks.length > 0) {
          setTasks(data.tasks);
          setMessage(data.msg || "Tasks loaded successfully");
        } else {
          setTasks([]);
          setMessage(data.msg || "No tasks found");
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("Network error - could not fetch tasks");
      setTasks([]);
    }
  };
    return (
    <div className="">
      <div className="flex justify-between items-center m-2 p-4 bg-gray-100 rounded-lg shadow-sm">
        <div className="flex items-center gap-6">
          <p className="text-2xl font-semibold text-gray-800">{message}</p>
        </div>

        <div className="flex flex-col items-end gap-1">
          <p className="text-right text-sm text-gray-500">Go To Dashboard</p>
          <NavLink
            to="/"
            className="bg-gray-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors w-[180px] text-center shadow"
          >
            Dashboard
          </NavLink>
        </div>
      </div>

      <div className="overflow-x-auto text-center">
        <ul className="min-w-[900px]">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="m-6 flex items-start gap-6 bg-white rounded-2xl shadow-lg border border-gray-200 p-4"
            >
              <div className="w-1/4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">
                  Title
                </h3>
                <p className="text-gray-700 break-words">{task.title}</p>
              </div>

              <div className="w-2/4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">
                  Description
                </h3>
                <p className="text-gray-700 break-words">{task.description}</p>
              </div>

              <div className="w-1/6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">
                  Due Date
                </h3>
                <p className="text-gray-700">{task.dueDate}</p>
              </div>

              <div className="w-1/6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">
                  Status
                </h3>
                <p className="text-gray-700">{task.status}</p>
              </div>

              <div className="w-1/6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-1 mb-2">
                  Priority
                </h3>
                <p className="text-gray-700">{task.priority}</p>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );

}

export default PendingTask;
