import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';

import hero from '../assets/hero_auth.png';

const Login = () => {
	const navigate = useNavigate();

	const responseGoogle = async (res) => {
		try {
			const decoded_response = jwt_decode(res.credential);
			localStorage.setItem('user', JSON.stringify(decoded_response));
			navigate('/', { replace: true });
		} catch (error) {
			console.log(err);
		}
	};

    const handleSubmit = (e) => {
        e.preventDefault()
    }

	return (
		<section className='w-full h-screen flex justify-center items-center'>
			<div className=' w-full mx-4 sm:mx-0 sm:w-2/3 md:w-4/5 bg-slate-400 rounded-lg flex  flex-col md:flex-row shadow-2xl'>
				<div className='w-full md:w-1/2 bg-gray-50 py-5 flex flex-col justify-center items-center'>
					<div className='w-12 h-12 flex justify-center items-center p-2 border-dashed rounded-lg border-blue-900 border-2'>
						<h2 className='font-extrabold text-3xl'>TH</h2>
					</div>
					<p className='text-2xl md:text-4xl font-extrabold my-4'>Welcome Back</p>
					<div>
						<GoogleLogin
							onSuccess={responseGoogle}
							onError={responseGoogle}
							className='w-full'
						/>
					</div>
					<div className='relative w-full flex items-center justify-center mt-4'>
						<div className='absolute w-2/3 h-0.5 bg-gray-400 opacity-50'></div>
						<p className='bg-gray-50 z-10 p-3 text-sm text-gray-400'>
							OR LOGIN IN WITH EMAIL
						</p>
					</div>
					{/* FORM SECTION */}
					<div className='w-2/3'>
						<form onSubmit={handleSubmit}>
							<div>
								<label htmlFor='email'>Email</label>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='Email address'
									className='login'
								/>
							</div>

							<div>
								<label htmlFor='pwd'>Password</label>
								<input
									type='password'
									name='password'
									id='pwd'
									placeholder='Password'
									className='login'
								/>
							</div>

							<div className='flex justify-center'>
								<a
									href='#'
									className='text-blue-900 underline text-sm'
								>
									Forgot password
								</a>
							</div>

							<button className='w-full bg-blue-800 text-white py-2 rounded-lg mt-4'>
								Sign In
							</button>
						</form>
						<div className='mt-4 flex justify-center text-xs'>
							<span>Don't have an account?</span>
							<a
								href='#'
								className='text-blue-900 underline ml-1 font-semibold'
							>
								Sign Up
							</a>
						</div>
					</div>
				</div>
				<div className='md:w-1/2 py-5 text-sm hidden md:flex justify-center items-center'>
					<img
						src={hero}
						alt='hero image'
					/>
				</div>
			</div>
		</section>
	);
};

export default Login;
