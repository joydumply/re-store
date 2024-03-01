import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	books: [],
};

const bookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		addBook(state, action) {
			state.books.push(action.payload);
		},
		removeBook(state, action) {
			state.books = state.books.filter((book) => book.id !== action.payload);
		},
		initBooks(state, action) {
			state.books = action.payload;
		},
	},
});

export default bookSlice.reducer;
export const { addBook, removeBook, initBooks } = bookSlice.actions;
