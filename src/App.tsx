import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Dashboard from './components/shared/Dashboard';
import LandingOne from './pages/LandingOne';
import CreateHabit from './components/shared/CreateHabit';
import './App.css';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<LandingOne />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/dashboard/createHabit" element={<CreateHabit />} />
			</Routes>
		</Router>
	);
};

export default App;
