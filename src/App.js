import './App.css';
import { useSelector } from 'react-redux';
import BooksList from './components/books-list/books-list';

function App() {
	const books = useSelector((state) => state.books.books);
	return (
		<div className="App">
			<BooksList books={books} />
		</div>
	);
}

export default App;
