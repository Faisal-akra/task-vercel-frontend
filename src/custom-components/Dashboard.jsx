


function Dashboard() {

  const remove = () => {
    localStorage.removeItem('token')
  }
  return(
    <div>
        <div>
          <div>Completed</div>
          <div><button onClick={remove}>Click</button></div>
          <div></div>
        </div>
    </div>
  )
}

export default Dashboard;