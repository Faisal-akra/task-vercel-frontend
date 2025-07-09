import {Link} from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiTask } from "react-icons/bi";
import { GrTasks } from "react-icons/gr";
import { RiDashboardFill } from "react-icons/ri";
import { MdPendingActions } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { LuListTodo } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import note from "../assets/sidebar/note.png"

function Dashboard() {

  const navigate = useNavigate();


  useEffect(() => {

    if(!localStorage.getItem('token')) {
      navigate('/login')
    }
  }, [navigate])

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/login');

  }

  return (
  <div className="">
    <div className="m-5">
      <div className="mb-8 border border-solid h-[50px]">
        <h1 className="font-extrabold text-xl">Task-Management</h1>
      </div>

      <div className="flex justify-between gap-4">
        <div className="relative gap-3 flex flex-col font-bold w-[200px] min-h-screen">
          <img 
            src={note} 
            alt="note" 
            className="absolute inset-0 w-full h-full object-cover opacity-70 z-0" 
          />
          <div className="text-center mb-4 z-10">
            <p className="font-bold">Name</p>
            <p>zjan45097@gmail.com</p>
          </div>

          <div className="flex flex-col gap-3 z-10">
            <Link 
              to={'/createTask'} 
              className="flex text-center gap-2 items-center  hover:font-extrabold  "
            > 
              <BiTask/> Craete-Task
            </Link>
           
            <Link 
              to={'/'} 
              className="flex text-center gap-2 items-center hover:font-extrabold "
            > 
              <RiDashboardFill/> Dashboard 
            </Link>
            
            <Link 
              to={'/allTasks'} 
              className="flex text-center gap-2 items-center  hover:font-extrabold  "
            > 
              <GrTasks/> Tasks
            </Link>
            
            <Link 
              to={'/pending'} 
              className="flex text-center gap-2 items-center  hover:font-extrabold  "
            > 
              <MdPendingActions/> Pending Tasks
            </Link>
            
            <Link 
              to={'/completed'} 
              className="flex text-center gap-2 items-center  hover:font-extrabold  "
            > 
              <IoCheckmarkDoneCircle/> Completed Tasks
            </Link>
            
            <Link 
              to={'/todo'} 
              className="flex text-center gap-2 items-center  hover:font-extrabold  "
            > 
              <LuListTodo/> To-Do Tasks
            </Link>
            
            <button 
              onClick={() => logOut()} 
              className="flex text-center gap-2 items-center  hover:font-extrabold hover:text-red-500 "
            >
              <TbLogout2/> Log-Out
            </button>
          </div>
        </div>

        <div className="flex justify-evenly w-[800px]">
          <p>Completed</p>
          <p>Pending</p>
          <p>To-Do</p>
        </div>
      </div>
    </div>
  </div>
)}
export default Dashboard;
