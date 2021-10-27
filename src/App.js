import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Container,
	Form,
	FormControl,
	Nav,
	NavDropdown,
	Button,
	Navbar,
} from 'react-bootstrap';
import './App.css';
import Mainpage from './components/Mainpage';
import Sidebar from './components/Sidebar';
// import SearchBar from './components/SearchBar';

function App() {
	// Create a state to hold our current query
	const [query, setQuery] = useState('bitcoin');
	// create a state to hold our current title
	const [data, setData] = useState([]);
	// create a change query handler function
	const handleQuery = (e) => {
		setQuery(e.target.value);
	};
	// create fetch data function
	useEffect(() => {
		const fetchData = async () => {
			const API_KEY = 'bb626e49c7a8499396cecb3d97f874a3';
			const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
			const res = await fetch(url);
			const data = await res.json();
			//
			setData(data.articles);
			// setTitle(data.articles[0].title);
			//
			console.log(`data`, data.articles);
		};
		fetchData();
	}, [query]);

	return (
		<div className="App">
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="#">CoderNews w/ React</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Nav
							className="me-auto my-2 my-lg-0"
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">
								<button value="top-headlines" onClick={handleQuery}>
									Top Headlines
								</button>
							</Nav.Link>
							<NavDropdown title="Popular" id="navbarScrollingDropdown">
								<NavDropdown.Item href="#action3">
									{' '}
									<button value="business" onClick={handleQuery}>
										Business
									</button>
								</NavDropdown.Item>
								<NavDropdown.Item href="#action4">
									<button value="travel" onClick={handleQuery}>
										Travel
									</button>
								</NavDropdown.Item>
								{/* <NavDropdown.Divider /> */}
								<NavDropdown.Item href="#action5">
									<button value="technology" onClick={handleQuery}>
										Technology
									</button>
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form className="d-flex">
							<FormControl
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>{' '}
			<Sidebar />
			<Mainpage />
			<div className="container">
				{data.map((article) => (
					<h1 key={article.id}>{article.title}</h1>
				))}
			</div>
		</div>
	);
}

export default App;
