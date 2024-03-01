import './App.css';
import { useSelector } from 'react-redux';
import BooksList from './components/books-list/books-list';
import Header from './components/header/header';

function App() {
	const books = useSelector((state) => state.books.books);
	return (
		<div className="App">
			<Header />
			<BooksList books={books} />
		</div>
	);
}

export default App;
