import React, { useState, useReducer } from 'react';
import { useFormContext } from '../context/FormContext';
import { PERSONAL_INFO } from './forms_component/PERSONAL_INFO';
import { FormReducer } from '../reducer/formReducer';
import './settings.css';


import {
	Password,
	Profile,
	Paypal,
	Payonner,
	TwoFactorAuth,
	ConnectedAccounts,
} from '../components/forms_component';

const Settings = () => {
	// This links the formstate state to the reducers
	// const [formState, dispatch] = useReducer(FormReducer, PERSONAL_INFO);

	// const handleChange = (e) => {
	// 	dispatch({
	// 		type: 'HANDLE INPUT TEXT',
	// 		field: e.target.name,
	// 		payload: e.target.value,
	// 	});
	// 	// console.log(formState)
	// };
	const { user, handleChange } = useFormContext();
	console.log(user)

	return (
		<div className='w-full'>
			<div className='flex justify-end items-center h-8 bg-white w-full p-10'>
				<button
					type='button'
					className='bg-black text-xs p-2 text-white'
				>
					Start Creating
				</button>
			</div>

			{/* FORMS */}
			<div className='px-14 py-8'>
				<form>
					<div className=' text-black text-xs'>
						<h3 className='text-lg font-semibold'>Profile</h3>
						<div className='bg-white py-2'>
							<div className='form-title px-5'>
								<h3 className='text-lg'>Change your info</h3>
							</div>
							<hr />
							<div className='px-5 mt-4'>
								<Profile
									handleChange={handleChange}
									user={user}
								/>
								<button className='bg-black text-xs px-6 py-2 text-white mt-8 mb-7'>
									Update Info
								</button>
							</div>
						</div>

						{/* PASSWORD */}

						<div className='bg-white py-2 mt-10'>
							<div className='form-title px-5'>
								<h3 className='text-lg font-semibold'>Change your password</h3>
							</div>
							<hr />
							<div className='px-5 mt-4'>
								<Password
									handleChange={handleChange}
									user={user}
								/>
								<button className='bg-black text-xs px-6 py-2 text-white mb-8'>
									Update Password
								</button>
							</div>
						</div>

						{/* connected account */}
						<div className='bg-white py-2 mt-10'>
							<div className='form-title px-5'>
								<h3 className='text-lg font-semibold'>Connected account</h3>
							</div>
							<hr />
							<div className='px-5 mt-10'></div>
						</div>

						{/* paypal */}
						<div className='bg-white py-2 mt-10'>
							<div className='form-title px-5'>
								<h3 className='text-lg font-semibold'>Set up your paypal address</h3>
							</div>
							<hr />
							<div className='px-5 mt-4'>
								<Paypal
									handleChange={handleChange}
									user={user}
								/>
								<button className='bg-black text-xs px-6 py-2 text-white mb-8'>
									Set Paypal address
								</button>
							</div>
						</div>

            	{/* Payoneer account */}
						<div className='bg-white py-2 mt-10'>
							<div className='form-title px-5'>
								<h3 className='text-lg font-semibold'>Payoneer Settings</h3>
							</div>
							<hr />
							<div className='px-5 my-5'>
                <Payonner />
              </div>
						</div>

            	{/* TWO FACTOR */}

						<div className='bg-white py-2 mt-10'>
							<div className='form-title px-5'>
								<h3 className='text-lg font-semibold'>Two-Factor Settings</h3>
							</div>
							<hr />
							<div className='px-5 mt-4'>
								<TwoFactorAuth/>
								<button className='bg-black text-xs px-6 py-2 text-white mb-8'>
									Update Two-Factor Settings
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Settings;
