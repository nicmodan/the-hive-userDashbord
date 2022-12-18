import React from 'react';

const CardOne = () => {
	return (
		<div className='flex flex-col w-full gap-5'>
			<div className='flex flex-col min-w-sm'>
				<div className='w-full card-one text-white rounded-2xl flex items-center'>
					<div>
						<img
							className='w-full h-6 mb-6 object-contain'
							src='https://teespring-ass.s3.amazonaws.com/upgrades/amaze-logo.png'
							alt='logo'
						/>
						<h3 className='font-bold mb-1'>
							Amaze<span className='font-normal italic'>with</span>Spring
						</h3>
						<p className='max-w-sm leading-normal text-sm'>
							Boost sales of your Spring products using Amaze’s beautiful
							no-code product pages
						</p>
						<button
							type='button'
							className='bg-white text-black p-2 rounded-lg text-xs transition-all ease-in-out hover:bg-white/75 duration-500 mt-3'
						>
							Create now
						</button>
					</div>
				</div>
			</div>

			<div>
				<img
					src='https://teespring-ass.s3.amazonaws.com/upgrades/amaze-icon-new.png'
					alt='amaze-logo'
					className='w-11 h-11'
				/>
				<h6 className='text-lg'>Amaze</h6>
				<p className='text-gray-500 text-sm'>Beautiful no-code product pages</p>
			</div>
		</div>
	);
};

export default CardOne;
