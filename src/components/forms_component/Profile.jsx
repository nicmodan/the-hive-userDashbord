import React from 'react';

const Profile = ({ handleChange, formState }) => {
	return (
		<div>
			<div className='flex justify-between'>
				<div className='w-full md:w-1/2'>
					<div>
						<label
							htmlFor='name'
							className='font-semibold'
						>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='first'
							value={formState.name}
							onChange={(e) => handleChange(e)}
	
						/>
						{/* <p className='error-msg'>{errorInfo.firstname}</p> */}
					</div>
					<div>
						<label
							htmlFor='displayName'
							className='font-semibold'
						>
							Display name
						</label>
						<input
							type='text'
							name='displayName'
							id='displayName'
							value={formState.displayName}
							onChange={(e) => handleChange(e)}
							// required
						/>
						<p className='error-msg -mt-3 mb-2'>
							This name will be shown publicly to your buyers
						</p>
					</div>
					<div>
						<label
							htmlFor='phone'
							className='font-semibold'
						>
							Phone number
						</label>
						<input
							type='tel'
							name='phone'
							id='phone'
							value={formState.phone}
							onChange={(e) => handleChange(e)}
							// required
						/>
						{/* <p className='error-msg'>{errorInfo.phone}</p> */}
					</div>
					<h6 className='font-semibold mb-2'>Advanced Settings</h6>
					<div>
						<h6 className='font-semibold'>Launch Preferences</h6>
						<label
							htmlFor='launch'
							className='flex gap-2 my-2'
						>
							<input
								type='checkbox'
								name='displayShare'
								id='launch'
								value=''
								onChange={(e) => handleChange(e)}
								// checked={true}
								// required
							/>
							<p className='error-msg'>Display share opions after launching </p>
						</label>
					</div>
					<div>
						<h6 className='font-semibold my-1'>
							Product listing display preferences
						</h6>
						<label htmlFor='product-listing'></label>
						<input
							type='text'
							name='productListing'
							id='product'
							value=''
							onChange={(e) => handleChange(e)}
							// checked={true}
							// required
						/>
						<div>
							<label
								htmlFor='feature-listing'
								className='flex gap-2'
							>
								<input
									type='checkbox'
									name='featureListing'
									id='listing'
									value=''
									onChange={(e) => handleChange(e)}
									// checked={true}
									// required
								/>
								<p className='error-msg'>
									Feature my listings in Spring's Boosted Network
								</p>
							</label>
						</div>
					</div>
				</div>

				{/* SECOND SECTION */}
				<div className='w-full md:w-1/2'>
					<h6 className='font-semibold'>Change your default address</h6>
					<div className='flex w-full gap-8'>
						<div className='w-3/4'>
							<label htmlFor='street'></label>
							<input
								type='text'
								name='street'
								id='street'
								value={formState.street}
								onChange={(e) => handleChange(e)}
								// required
							/>
							<p className='error-msg -mt-3'>Street</p>
						</div>
						<div className='w-1/4'>
							<label htmlFor='apt'>
								<input
									type='text'
									name='apt'
									id='apt'
									value={formState.apt}
									onChange={(e) => handleChange(e)}
									// required
								/>
								<p className=' -mt-3'>Apt / Suite</p>
							</label>
						</div>
					</div>

					{/* location */}
					<div className='flex w-full gap-8'>
						<div className='w-2/4'>
							<label htmlFor='city'></label>
							<input
								type='text'
								name='city'
								id='city'
								value={formState.city}
								onChange={(e) => handleChange(e)}
							/>
							<p className='error-msg -mt-3'>City</p>
						</div>
						<div className='w-1/4'>
							<label htmlFor='state'></label>
							<input
								type='text'
								name='state'
								id='state'
								value={formState.state}
								onChange={(e) => handleChange(e)}
								className='medium'
							/>
							<p className='error-msg -mt-3'>State</p>
						</div>
						<div className='w-1/4'>
							<label htmlFor='zip'></label>
							<input
								type='text'
								name='zip'
								id='zip'
								value=''
								onChange={(e) => handleChange(e)}
								className='small'
							/>
							<p className='error-msg -mt-3'>zip</p>
						</div>
					</div>
					<div className='w-2/4'>
						<label htmlFor='country'></label>
						<input
							type='text'
							name='country'
							id='country'
							value={formState.country}
							onChange={(e) => handleChange(e)}
						/>
						<p className='error-msg -mt-3'>Country</p>
					</div>

					<h6 className='font-semibold mt-3'>Default Time Zone</h6>
					<div>
						<label htmlFor='time-zone'></label>
						<input
							type='text'
							name='timezone'
							id='time'
							value={formState.timezone}
							onChange={(e) => handleChange(e)}
						/>
						<p className='error-msg -mt-3'>zip</p>
					</div>

					<h6 className='font-semibold mt-3'>Default currency</h6>
					<div>
						<label htmlFor='currency'></label>
						<input
							type='text'
							name='currency'
							id='currency'
							value={formState.currency}
							onChange={(e) => handleChange(e)}
						/>
						<p className='error-msg -mt-3'>zip</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
