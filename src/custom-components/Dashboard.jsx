function Dashboard() {
  return (
    <div className="">
      <div className=" m-5 ">
        <div className="mb-8">
          <h1 className="font-extrabold text-xl">Task-Management</h1>
        </div>

        <div className=" flex justify-between gap-4 ">
          <div className="gap-3 flex flex-col font-bold w-[200px] ">
            <div className="text-center mb-4">
              <p className=" font-bold  ">Name</p>
              <p>zjan45097@gmail.com</p>
            </div>

            <p>Craete-Task</p>
            <p>Dashboard</p>
            <p>Tasks</p>
            <p>Pending Tasks</p>
            <p>Completed Tasks</p>
            <p>To-Do Tasks</p>
            <p>Logout</p>
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
