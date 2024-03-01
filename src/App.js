import './App.css';
// import { useSelector } from 'react-redux';
import BooksList from './components/books-list/books-list';
import Header from './components/header';
import { Outlet } from 'react-router-dom';

function App() {
	// const books = useSelector((state) => state.books.books);
	return (
		<div className="App">
			<Header />
			{/* <BooksList books={books} /> */}
			<Outlet />
		</div>
	);
}

export default App;
