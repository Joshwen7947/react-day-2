import React from 'react';
import { useEffect, useState } from 'react';

import {
	Container,
	Form,
	FormControl,
	Nav,
	NavDropdown,
	Button,
	Navbar,
} from 'react-bootstrap';
const SearchBar = () => {
	const [query, setQuery] = useState('bitcoin');

	const handleQuery = (e) => {
		setQuery(e.target.value);
	};
	return (
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
						<Nav.Link href="#action2">Top Headlines</Nav.Link>
						<NavDropdown title="Popular" id="navbarScrollingDropdown">
							<NavDropdown.Item
								href="#action3"
								value="business"
								onClick={handleQuery}
							>
								Business
							</NavDropdown.Item>
							<NavDropdown.Item href="#action4">Travel</NavDropdown.Item>
							{/* <NavDropdown.Divider /> */}
							<NavDropdown.Item href="#action5">Technology</NavDropdown.Item>
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
		</Navbar>
	);
};

export default SearchBar;
