import "./App.css";
import Register from "./custom-components/RegisterForm";
import { Routes, Route } from "react-router-dom";
import Login from "./custom-components/LoginForm";
import Dashboard from "./custom-components/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthRedirect from "./routes/AuthRedirect";
import CreateTaskForm from "./tasksApis/createTask";
import AllTasks from "./tasksApis/All-Tasks";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRedirect>
              <Register />
            </AuthRedirect>
          }
        />

        <Route
          path="/login"
          element={
            <AuthRedirect>
              <Login />
            </AuthRedirect>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />



        <Route
          path="/createTask"
          element={
            <ProtectedRoute>
              <CreateTaskForm/>
            </ProtectedRoute>
          }
        />


        
        <Route
          path="/allTasks"
          element={
            <ProtectedRoute>
              <AllTasks/>
            </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
