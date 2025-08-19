import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

function AllTasks() {
  const [tasks, setTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [searchStatus, setSearchStatus] = useState("");
  const [searchPriority, setSearchPriority] = useState("");

  const token = localStorage.getItem("token");
  const formattedStatus = searchStatus.trim().toLowerCase();
  const formattedPriority = searchPriority.trim().toLowerCase();

  const fetchTask = async () => {
    try {
      const res = await fetch("http://localhost:9000/api/task/fetchTask", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        if (data.task && data.task.length > 0) {
          setTasks(data.task);
          setMessage(data.msg || "Tasks loaded successfully");
        } else {
          setTasks([]);

          setMessage(
            data.msg === "No tasks available" ? data.msg : "No tasks found"
          );
        }
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("Network error - could not fetch tasks");
      setTasks([]);
    }
  };

  const fetchTaskByStatus = async () => {
    try {
      const res = await fetch(
        `https://localhost:9000/api/task/fetchTaskByStatus/${formattedStatus}`,
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
        setMessage(data.msg);
        setTasks(data.tasks);
      }
    } catch (error) {
      console.log(error);
      setMessage("error");
    }
  };

  const fetchTaskByPriority = async () => {
    try {
      const res = await fetch(
        `https://localhost:9000/api/task/fetchTaskByPriority/${formattedPriority}`,
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
        setMessage(data.msg);
        setTasks(data.tasks);
      }
    } catch (error) {
      console.log(error);
      setMessage("error");
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  return (


    <div className="">



      <div className="flex justify-between items-center m-2 p-4 bg-gray-100 rounded-lg shadow-sm">
 
  <div className="flex items-center gap-6">
    <p className="text-2xl font-semibold text-gray-800">{message}</p>

    <input
      type="text"
      placeholder="Search by status..."
      value={searchStatus}
      onChange={(e) => setSearchStatus(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") fetchTaskByStatus();
      }}
      className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />

    <input
      type="text"
      placeholder="Search by priority..."
      value={searchPriority}
      onChange={(e) => setSearchPriority(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") fetchTaskByPriority();
      }}
      className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
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
        <ul className="min-w-[800px]">
          {tasks.map((task) => (
            <div
              key={task._id}
              className=" m-6 border flex items-center gap-5"
            >
         

              <div className="w-1/4 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
           
                <div className="flex items-center justify-between border-b pb-2 mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">Title</h3>
                  <div className="flex space-x-3 text-gray-500">
                    <button className="hover:text-blue-500 transition-colors">
                      <CiEdit size={22} />
                    </button>
                    <button className="hover:text-red-500 transition-colors">
                      <MdDeleteOutline size={22} />
                    </button>
                  </div>
                </div>

              
                <p className="text-gray-700 break-words">{task.title}</p>
              </div>

              <div className="w-1/4 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center justify-between border-b pb-2 mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">Description</h3>
                  <div className="flex space-x-3 text-gray-500">
                    <button className="hover:text-blue-500 transition-colors">
                      <CiEdit size={22} />
                    </button>
                    <button className="hover:text-red-500 transition-colors">
                      <MdDeleteOutline size={22} />
                    </button>
                  </div>
                </div>

                <p className="text-gray-700 break-words">{task.description}</p>
              </div>

              <div className="w-1/4 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center justify-between border-b pb-2 mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">Due Date</h3>
                  <div className="flex space-x-3 text-gray-500">
                    <button className="hover:text-blue-500 transition-colors">
                      <CiEdit size={22} />
                    </button>
                    <button className="hover:text-red-500 transition-colors">
                      <MdDeleteOutline size={22} />
                    </button>
                  </div>
                </div>

                <p className="text-gray-700 break-words">{task.dueDate}</p>
              </div>


<div className="w-1/4 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">

  <div className="flex items-center justify-between border-b pb-2 mb-3">
    <h3 className="text-lg font-semibold text-gray-800">Title</h3>
    <div className="flex space-x-3 text-gray-500">
      <button className="hover:text-blue-500 transition-colors">
        <CiEdit size={22} />
      </button>
      <button className="hover:text-red-500 transition-colors">
        <MdDeleteOutline size={22} />
      </button>
    </div>
  </div>

  
  <p className="text-gray-700 break-words">{task.status}</p>
</div>
<div className="w-1/4 p-4 bg-white rounded-2xl shadow-lg border border-gray-200">

  <div className="flex items-center justify-between border-b pb-2 mb-3">
    <h3 className="text-lg font-semibold text-gray-800">Title</h3>
    <div className="flex space-x-3 text-gray-500">
      <button className="hover:text-blue-500 transition-colors">
        <CiEdit size={22} />
      </button>
      <button className="hover:text-red-500 transition-colors">
        <MdDeleteOutline size={22} />
      </button>
    </div>
  </div>

  
  <p className="text-gray-700 break-words">{task.priority}</p>
</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AllTasks;
