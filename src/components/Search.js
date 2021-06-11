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
						className='px-3 py-2 mb-12 shadow-sm bg-purple-white focus:outline-none'
						placeholder='Search by name...'
						type='text'
						onChange={(e) => setText(e.target.value)}
					/>
					<button
						className='px-4 py-2 font-bold text-white bg-blue-300 shadow-sm hover:bg-blue-400 focus:outline-none'
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
