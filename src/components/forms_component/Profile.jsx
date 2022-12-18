import React from 'react';


const Profile = ({ handleChange }) => {
	return (
		<div>
			<div className='flex justify-between'>
				<div className='w-full md:w-1/2'>
					<div>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							id='first'
							value='mike flemings'
							onChange={(e) => handleChange(e)}
							// required
						/>
						{/* <p className='error-msg'>{errorInfo.firstname}</p> */}
					</div>
					<div>
						<label htmlFor='displayName'>Display name</label>
						<input
							type='text'
							name='displayName'
							id='displayName'
							value=''
							onChange={(e) => handleChange(e)}
							// required
						/>
						<p className='error-msg'>
							This name will be shown publicly to your buyers
						</p>
					</div>
					<div>
						<label htmlFor='phone'>Phone number</label>
						<input
							type='tel'
							name='phone'
							id='phone'
							value=''
							onChange={(e) => handleChange(e)}
							// required
						/>
						{/* <p className='error-msg'>{errorInfo.phone}</p> */}
					</div>
					<h6>Advanced Settings</h6>
					<div>
            <h6>Launch Preferences</h6>
						<label htmlFor='launch'></label>
						<input
							type='checkbox'
							name='launch'
							id='launch'
							value=''
							onChange={(e) => handleChange(e)}
							checked={true}
							// required
						/>
						<p className='error-msg'>Display share opions after launching </p>
					</div>
          <div>
            <h6>Product listing display preferences</h6>
						<label htmlFor='product-listing'></label>
						<input
							type='text'
							name='product-listing'
							id='product'
							value=''
							onChange={(e) => handleChange(e)}
							checked={true}
							// required
						/>
						<input
							type='checkbox'
							name='launch'
							id='launch'
							value=''
							onChange={(e) => handleChange(e)}
							checked={true}
							// required
						/>
						<p className='error-msg'> Feature my listings in Spring's Boosted Network </p>
					</div>
				</div>

				<div className='w-full md:w-1/2'>
					<h6>Change your default address</h6>
					<div>
						<label htmlFor='street'></label>
						<input
							type='text'
							name='street'
							id='street'
							value=''
							onChange={(e) => handleChange(e)}
							// required
						/>
						<p className='error-msg'>Street</p>
					</div>
					<div>
						<label htmlFor='apt'></label>
						<input
							type='text'
							name='apt'
							id='apt'
							value=''
							onChange={(e) => handleChange(e)}
							// required
						/>
					</div>
					<p className='msg'>Apt / Suite</p>
					<div>
						<label htmlFor='city'></label>
						<input
							type='text'
							name='city'
							id='city'
							value=' '
							onChange={(e) => handleChange(e)}
						/>
						<p className='error-msg'>City</p>
					</div>
					<div>
						<label htmlFor='state'></label>
						<input
							type='text'
							name='state'
							id='state'
							value=' '
							onChange={(e) => handleChange(e)}
						/>
						<p className='error-msg'>State</p>
					</div>
					<div>
						<label htmlFor='zip'></label>
						<input
							type='text'
							name='zip'
							id='zip'
							value=''
							onChange={(e) => handleChange(e)}
						/>
						<p className='error-msg'>zip</p>
					</div>
					<div>
						<label htmlFor='country'></label>
						<input
							type='text'
							name='country'
							id='country'
							value=''
							onChange={(e) => handleChange(e)}
						/>
						<p className='error-msg'>Country</p>
					</div>

					<h6>Default Time Zone</h6>
					<div>
						<label htmlFor='time-zone'></label>
						<input
							type='text'
							name='time-zone'
							id='time'
							value=''
							onChange={(e) => handleChange(e)}
						/>
						<p className='error-msg'>zip</p>
					</div>

					<h6>Default currency</h6>
					<div>
						<label htmlFor='currency'></label>
						<input
							type='text'
							name='currency'
							id='currency'
							value=''
							onChange={(e) => handleChange(e)}
						/>
						<p className='error-msg'>zip</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
