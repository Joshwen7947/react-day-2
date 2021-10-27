import { useEffect, useState } from 'react';
import './App.css';

function App() {
	// Create a state to hold our current query
	const [query, setQuery] = useState('');
	// create a state to hold our current title
	const [title, setTitle] = useState('');
	// create a change query handler function
	const handleQuery = (e) => {
		console.log(e.target.value);
	};
	// create fetch data function
	return (
		<div className="App">
			<div>
				<button value="milk" onClick={handleQuery}>
					Milk
				</button>
				<button value="tea" onClick={handleQuery}>
					Tea
				</button>
				<button value="coffee" onClick={handleQuery}>
					Coffee
				</button>
			</div>
			<div>
				<p>{title}</p>
			</div>
		</div>
	);
}

export default App;
