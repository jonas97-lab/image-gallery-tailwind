import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Search from './components/Search';

function App() {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [search, setSearch] = useState('');

	useEffect(() => {
		const PIX_API_URL = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}`;

		axios
			.get(PIX_API_URL)
			.then((response) => {
				console.log(response.data.hits);
				setImages(response.data.hits);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
		setIsLoading(false);
	}, [search]);

	return (
		<>
			<Search getData={(text) => setSearch(text)} />
			<div className='mx-auto'>
				{isLoading ? (
					<h1>Loading ...</h1>
				) : (
					<div className='grid flex-wrap grid-cols-3 gap-6 mx-6 md:grid-cols-4'>
						{images.map((image) => (
							<Card key={image.id} image={image} />
						))}
					</div>
				)}
				{!isLoading && images.length < 1 && (
					<h1 className='flex items-center justify-center text-2xl font-semibold'>
						There are no images available ...{' '}
					</h1>
				)}
			</div>
		</>
	);
}

export default App;
