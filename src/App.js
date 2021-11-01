import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';

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
	console.log(query);

	return (
		<div className="App">
			<SearchBar setQuery={setQuery} />
			<Sidebar setQuery={setQuery} />
			{/* <div id="wrap"> */}
			<div>
				{data &&
					data.map((article) => (
						<>
							<h1 key={article.id}>{article.title}</h1>
							<img src={article.urlToImage} />
							<h2>{article.description}</h2>
						</>
					))}
			</div>
		</div>
		// </div>
	);
}

export default App;
