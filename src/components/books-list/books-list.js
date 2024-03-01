import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initBooks } from '../../redux/bookSlice';
import { useSelector } from 'react-redux';

const BooksList = () => {
	const books = useSelector((state) => state.books.books);
	const dispatch = useDispatch();

	useEffect(() => {
		const dummyBooks = [
			{
				id: 1,
				title: 'О Дивный Новый Мир',
				author: 'Олдос хаксли',
			},
			{
				id: 2,
				title: '1984',
				author: 'Джолдж Оруэлл',
			},
			{
				id: 3,
				title: 'Дом в котором...',
				author: 'Мариам Петросян',
			},
			{
				id: 4,
				title: 'Американские Боги',
				author: 'Нил Гейман',
			},
		];
		dispatch(initBooks(dummyBooks));
	}, [dispatch]);
	return (
		<div>
			<ul>
				{books.map((book) => (
					<li key={book.id}>{book.title}</li>
				))}
			</ul>
		</div>
	);
};

export default BooksList;
