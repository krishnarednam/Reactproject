
import './App.css';
import Home from './components/Home/Home';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Blog from './components/RecentPosts/RecentPosts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route exact path="/works" element={<Works />} />
					<Route exact path="/contact" element={<Contact />} />
					<Route exact path="/blog" element={<Blog />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
