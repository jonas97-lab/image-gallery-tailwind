import React from 'react';

const Card = ({ image }) => {
	const tags = image.tags.split(',');

	return (
		<div className='max-w-sm overflow-hidden rounded shadow-lg'>
			<img className='w-full h-48' src={image.webformatURL} alt={image.user} />
			<div>
				<div className='px-6 py-4'>
					<div className='mb-2 text-xl font-bold text-purple-500 '>
						Photo by {image.user}
					</div>
					<ul>
						<li>
							<strong>Views: </strong>
							{image.views}
						</li>
						<li>
							<strong>Downloads: </strong>
							{image.downloads}
						</li>
						<li>
							<strong>Likes: </strong>
							{image.likes}
						</li>
					</ul>
					<div className='py-4'>
						{tags.map((tag, index) => (
							<span
								className='inline-block px-3 py-1 mr-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'
								key={index}
							>
								#{tag}
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
