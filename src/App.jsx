import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Important from "./pages/Important";
import Completed from "./pages/Completed";
import Signup from "./pages/Signup";
import { AuthContextProvider } from "./context/authContext";
import ProtectedRoute from "./route/ProtectedRoute";
import TaskContextProvider from "./context/taskContext";



const App = () => {
  return (
    <AuthContextProvider>
      <TaskContextProvider>
        <div>
          <Router>
            <Routes>
              <Route path="" element={<Layout />}>
                <>
                  <Route path="" element={<Dashboard />} />
                  <Route path="important" element={<Important />} />
                  <Route path="completed" element={<Completed />} />
                </>
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
              </Route>
            </Routes>
          </Router>
        </div>
      </TaskContextProvider>
    </AuthContextProvider>
  );
};

export default App;
