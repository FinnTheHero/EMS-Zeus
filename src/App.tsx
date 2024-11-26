import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout";
import Dashboard from "./Pages/Dashboard";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import SystemPage from "./Pages/SystemPage";

function App() {
    return (
        <div className="App">
            <RoutesManager />
        </div>
    );
}

const RoutesManager = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/system" element={<SystemPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
