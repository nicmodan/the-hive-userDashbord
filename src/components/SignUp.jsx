import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroSignUp from '../assets/heroSignUp.png';

const register = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	consent: false,
};

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

const SignUp = () => {
	const firstNameRef = useRef();
	const navigate = useNavigate();

	const [user, setUser] = useState(register);
	const [errorInfo, setErrorInfo] = useState({});
	const [consent, setConsent] = useState(false);

	const [pwd, setPwd] = useState(register.password);
	const [validPwd, setValidPwd] = useState(false);
	const [pwdFocus, setPwdFocus] = useState(false);

	const [matchPwd, setMatchPwd] = useState('');
	const [validMatch, setValidMatch] = useState(false);
	const [matchFocus, setMatchFocus] = useState(false);

	useEffect(() => {
		firstNameRef.current.focus();
	}, []);

    // This is to help validates password and confirm password
	useEffect(() => {
		setValidPwd(PWD_REGEX.test(pwd));
		setValidMatch(pwd === matchPwd);
	}, [pwd, matchPwd]);

	const handleChange = (e) => {
        const { name, value } = e.target;
		setUser({ ...user, [name]: value });
		setErrorInfo({});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let newError = validateForm(user);
		setErrorInfo(newError);
		if (Object.keys(newError).length === 0) {
			// This is where you can call the api that will send the data to the server before it navigates to the dashboard

			navigate('/', { replace: true });
		}
	};
    
	//this function validates the form
	const validateForm = (values) => {
        const errormsgs = {};
		if (!values.firstName) {
            errormsgs.firstname = 'Please enter your firstname';
		}
		if (!values.lastName) {
			errormsgs.lastname = 'Please enter your lastname';
		}
		if (!values.email) {
			errormsgs.email = 'Please enter your email address';
		} else if (!emailRegex.test(values.email)) {
			errormsgs.email = 'Please enter a valid email address';
		}
		if (consent === false) {
			errormsgs.consent = 'Please tick the box';
		}
		return errormsgs;
	};

    const validateConsent = (e) => {
        const { checked } = e.target;
        setConsent(checked);
    };
	return (
		<section className='w-full h-screen flex justify-center items-center'>
			<div className=' w-full mx-4 sm:mx-0 sm:w-2/3 md:w-4/5 bg-slate-400 rounded-lg flex  flex-col md:flex-row shadow-2xl'>
				<div className='w-full md:w-1/2 bg-gray-50 py-5 flex flex-col justify-center items-center'>
					<div className='w-12 h-12 flex justify-center items-center p-2 border-dashed rounded-lg border-blue-900 border-2'>
						<h2 className='font-extrabold text-3xl'>TH</h2>
					</div>
					<p className='text-xl md:text-xl font-bold my-1'>
						Welcome to The Hive
					</p>
					<p className='text-gray-400 text-xs mb-2'>
						Get instant access to the services we have to offer
					</p>

					{/* FORM SECTION */}
					<div className='w-4/5'>
						<form onSubmit={handleSubmit}>
							<div className='flex flex-col md:flex-row w-full md:gap-5'>
								<div className='md:w-1/2'>
									<label
										htmlFor='firstName'
										className='text-sm'
									>
										FirstName
									</label>
									<input
										type='text'
										name='firstName'
										id='firstName'
										className='login'
										ref={firstNameRef}
										value={user.firstName}
										onChange={handleChange}
									/>
									<p className='text-sm -mt-3 text-red-600'>
										{errorInfo.firstname}
									</p>
								</div>
								<div className='md:w-1/2'>
									<label
										htmlFor='lastName'
										className='text-sm'
									>
										LastName
									</label>
									<input
										type='text'
										name='lastName'
										id='lastName'
										className='login'
										onChange={handleChange}
										value={user.lastName}
									/>
									<p className='text-sm -mt-3 text-red-600'>
										{errorInfo.lastname}
									</p>
								</div>
							</div>
							<div>
								<label
									htmlFor='email'
									className='text-sm'
								>
									Email
								</label>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='Email address'
									className='login'
									value={user.email}
									onChange={handleChange}
								/>
								<p className='text-sm -mt-3 text-red-600'>{errorInfo.email}</p>
							</div>

							<div>
								<label
									htmlFor='pwd'
									className='text-sm'
								>
									Password
								</label>
								<input
									type='password'
									name='password'
									id='pwd'
									placeholder='Password'
									onFocus={() => setPwdFocus(true)}
									onBlur={() => setPwdFocus(false)}
									value={pwd}
									onChange={(e) => setPwd(e.target.value)}
									className='login'
								/>
								<p
									className={`${
										pwdFocus && !validPwd ? 'text-red-600 text-xs' : 'hidden'
									} `}
								>
									8 to 24 characters.
									<br />
									Must include uppercase and lowercase letters, a number and a
									special character.
									<br />
								</p>
							</div>

							<div>
								<label
									htmlFor='confirmPwd'
									className='text-sm'
								>
									Confirm Password
								</label>
								<input
									type='password'
									name='confirmPwd'
									id='confirmPwd'
									placeholder='Password'
									onFocus={() => setMatchFocus(true)}
									onBlur={() => setMatchFocus(false)}
									onChange={(e) => setMatchPwd(e.target.value)}
									className='login'
								/>
								<p
									className={`${
										matchFocus && !validMatch
											? 'text-red-600 text-xs'
											: 'hidden'
									} `}
								>
									Must match the first password input field.
								</p>
							</div>
							<div className='flex justify-start items-start gap-2'>
								<input
									type='checkbox'
									name='TAC'
									id='TAC'
									className='mt-1'
									onChange={validateConsent}
								/>
								<p className='text-sm text-gray-500'>
									I understand and agree to the hive's terms and condition
								</p>
							</div>
							<p className='text-sm text-red-600'>{errorInfo.consent}</p>

							<button className='w-full bg-blue-800 text-white py-2 rounded-lg mt-4'>
								Sign Up
							</button>
						</form>
						<div className='mt-4 flex justify-center text-xs'>
							<span>Already have an account?</span>
							<Link
								to='/login'
								className='text-blue-900 underline ml-1 font-semibold'
							>
								Sign in
							</Link>
						</div>
					</div>
				</div>
				<div className='md:w-1/2 py-5 text-sm hidden md:flex justify-center items-center'>
					<img
						src={heroSignUp}
						alt='hero image'
					/>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
