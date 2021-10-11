import './App.css';
import axiosInit from './helper/axiosConfig';
import Roadmap from './pages/roadmap/Roadmap';

function App() {
	axiosInit();
	return <Roadmap />;
}

export default App;
