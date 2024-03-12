import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Dashboard from "./components/shared/Dashboard";
import "./App.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
