import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initBooks } from '../../redux/bookSlice';

const BooksList = ({ books }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const initBookObject = [
			{
				id: 0,
				name: 'О Дивный Новый Мир',
				author: 'Олдос хаксли',
			},
		];
		dispatch(initBooks(initBookObject));
	}, [dispatch]);
	return (
		<div>
			<ul>
				{books.map((book) => (
					<li key={book.id}>{book.name}</li>
				))}
			</ul>
		</div>
	);
};

export default BooksList;
