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
      <div className=" m-5 ">

        <div className="mb-8 border border-solid bg-slate-50 h-[50px]">
          <h1 className="font-extrabold text-xl">Task-Management</h1>
        </div>

        <div className=" flex justify-between gap-4 ">
          <div className="gap-3 flex flex-col font-bold w-[200px] ">

            <div className="text-center mb-4">
              <p className=" font-bold  ">Name</p>
              <p>zjan45097@gmail.com</p>
            </div>

            {/* <p className=" flex text-center gap-2 items-center">  <BiTask/>  Craete-Task</p> */}
            <Link to={'/createTask'} className=" flex text-center gap-2 items-center"> <BiTask/> Craete-Task</Link>
           
            <Link to={'/'} className=" flex text-center gap-2 items-center"> <RiDashboardFill/> Dashboard </Link>
            {/* <p className=" flex text-center gap-2 items-center"> <GrTasks/>Tasks</p> */}
            <Link to={'/allTasks'} className="flex text-center gap-2 items-center"> <GrTasks/> Tasks</Link>
            <p className=" flex text-center gap-2 items-center"> <MdPendingActions/> Pending Tasks</p>
            <p className=" flex text-center gap-2 items-center" > <IoCheckmarkDoneCircle/> Completed Tasks</p>
            <p className=" flex text-center gap-2 items-center" > <LuListTodo/> To-Do Tasks</p>
            <button onClick={() => logOut()} className=" flex text-center gap-2 items-center"><TbLogout2/> Log-Out</button>
          </div>

          <div className="flex justify-evenly  w-[800px]">
            <p>Completed</p>
            <p>Pending</p>
            <p>To-Do</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
