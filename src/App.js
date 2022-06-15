import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Project from './pages/Project'
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:project" element={<Project />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
