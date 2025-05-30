import "./App.css";
import Register from "./custom-components/RegisterForm";
import { Routes, Route } from "react-router-dom";
import Login from "./custom-components/LoginForm";
import Dashboard from "./custom-components/Dashboard";
import ProtectedRoute from "./custom-components/ProtectedRoute";
import AuthRedirect from "./custom-components/AuthRedirect";

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
      </Routes>
    </div>
  );
}

export default App;
