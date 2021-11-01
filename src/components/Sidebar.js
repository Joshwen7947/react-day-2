import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
const categoryArray = [
	'business',
	'entertainment',
	'health',
	'travel',
	'science',
	'sports',
	'technology',
];

const Sidebar = ({ setQuery }) => {
	const handleQuery = (e) => {
		setQuery(e.target.getAttribute('value'));
		console.log(e.target.getAttribute('value'));
	};

	return (
		<div className="sideBar">
			{categoryArray.map((category) => {
				return (
					<Button value={category} onClick={handleQuery}>
						{category}
					</Button>
				);
			})}
		</div>
	);
};

export default Sidebar;
