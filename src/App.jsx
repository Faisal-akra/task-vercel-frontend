import "./App.css";
import Register from "./custom-components/RegisterForm";
import { Routes, Route } from "react-router-dom";
import Login from "./custom-components/LoginForm";
import Dashboard from "./custom-components/Dashboard";


function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App;
