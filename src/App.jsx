import "./App.css";
import Register from "./custom-components/RegisterForm";
import { Routes, Route } from "react-router-dom";
import Login from "./custom-components/LoginForm";
import Dashboard from "./custom-components/Dashboard";
import ProtectedRoute from "./custom-components/ProtectedRoute";


function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Register/>}/>
      <Route path="/login" element={<ProtectedRoute>
        <Login/>
      </ProtectedRoute>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  )
}

export default App;
