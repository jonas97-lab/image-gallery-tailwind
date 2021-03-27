import React, { useState } from 'react';

const Search = ({ getData }) => {
	const [text, setText] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		getData(text);
	};

	return (
		<div className='flex flex-col items-center justify-center mt-6'>
			<div class='mr-6 my-2'>
				<form onSubmit={handleSubmit}>
					<input
						className='px-3 py-2 mb-12 border-0 rounded shadow bg-purple-white'
						placeholder='Search by name...'
						type='text'
						onChange={(e) => setText(e.target.value)}
					/>
					<button
						className='px-4 py-2 ml-2 font-bold text-white bg-blue-300 rounded-md focus:outline-none'
						type='submit'
					>
						Click
					</button>
				</form>
			</div>
		</div>
	);
};

export default Search;
