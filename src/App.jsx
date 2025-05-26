import "./App.css";
import Register from "./custom-components/RegisterForm";
import { Routes, Route } from "react-router-dom";
import Login from "./custom-components/LoginForm";


function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App;
