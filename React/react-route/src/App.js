import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router";
import Home from "./Components/Home";
import About from "./Components/About";
import Users from "./Components/Users";
import User from "./Components/User";

function App() {
  return (
	<BrowserRouter>
    <nav>
	<ul>
		<li><Link to="/">Home</Link></li>
		<li><Link to="/about">About</Link></li>
		<li><Link to="/users">Users</Link></li>
	</ul>
    <h2>{}</h2>
    </nav>
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about" element={<About />} />
		<Route path="/users/*" element={<Users />} />
		<Route path="/user" element={<User />} />
	</Routes>
	</BrowserRouter>

  );
}

export default App;
