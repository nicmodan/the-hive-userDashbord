import React, { useState, useRef } from 'react';
import Select from 'react-select';
import { useFormContext } from '../context/FormContext';
import { AiOutlineEye } from 'react-icons/ai';
import { FiEdit2, FiInstagram } from 'react-icons/fi';
import { TbWorld } from 'react-icons/tb';
import { GrAddCircle, GrClose, GrYoutube } from 'react-icons/gr';
import { TfiTwitterAlt } from 'react-icons/tfi';
import { FaTwitch, FaDiscord, FaTiktok, FaFacebookF } from 'react-icons/fa';
import { GiCancel } from 'react-icons/gi';

import './store.css';

const icons = {
	Facebook: FaFacebookF,
	Twitter: TfiTwitterAlt,
	Instagram: FiInstagram,
	Youtube: GrYoutube,
	Twitch: FaTwitch,
	Website: TbWorld,
	Discord: FaDiscord,
	Tiktok: FaTiktok,
};

const options = [
	{ value: 'Facebook', label: 'Facebook' },
	{ value: 'Twitter', label: 'Twitter' },
	{ value: 'Instagram', label: 'Instagram' },
	{ value: 'Youtube', label: 'Youtube' },
	{ value: 'Twitch', label: 'Twitch' },
	{ value: 'Website', label: 'Website' },
	{ value: 'Discord', label: 'Discord' },
	{ value: 'Tiktok', label: 'Tiktok' },
];

const customStyle = {
	control: (base) => ({
		...base,
		border: 0,
		boxShadow: 'none',
	}),
	option: (base, { isFocused }) => ({
		...base,
		backgroundColor: isFocused ? 'rgb(37 99 235)' : 'white',
		color: isFocused ? 'white' : 'rgb(107 114 128)',
	}),
	menuList: (base) => ({
		...base,

		'::-webkit-scrollbar': {
			width: '4px',
			height: '0px',
		},
		'::-webkit-scrollbar-track': {
			background: '#f1f1f1',
		},
		'::-webkit-scrollbar-thumb': {
			background: '#888',
		},
		'::-webkit-scrollbar-thumb:hover': {
			background: '#555',
		},
	}),
};
const Stores = () => {
	let linkInput = useRef(null);
	const [user, dispatch] = useFormContext();

	const [storeLink, setStoreLink] = useState(user.storeName);
	const [isfocused, setIsfocused] = useState(false);
	const [selectedSocials, setSelectedSocials] = useState(null);
	const [isSelected, setIsSelected] = useState(false);
	const [socialInfo, setsocialInfo] = useState(user.socials);
	const [linkInfo, setLinkInfo] = useState(' ');
	const [modalOpen, setModalOpen] = useState(false);

	const handleChange = (e) => {
		const { value } = e.target;
		setStoreLink(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const updateSocials = (e) => {
		e.preventDefault();
		setsocialInfo((prevObj) =>
			prevObj.map((social, idx) => {
				if (selectedSocials?.value == social.name) {
					const newSocials = {...user}
					// const userSocials = {...newSocials, socials: } 
					dispatch({
						type: 'HANDLE SOCIAL INPUT',
						// field: newSocials["social"][idx]["url"],
						payload: {
							socials: [...user["socials"], ...[...user["socials"][idx], ...{url: linkInfo}]]
						},
						// payload: { ...social, url: linkInfo },
					})
					return { ...social, url: linkInfo };
				}
				return social;
			})
		);
		setIsSelected(false);
		setModalOpen(false);
		setLinkInfo('');

		
	};

	const handleDelete = (e) => {
		setsocialInfo((prevObj) =>
			prevObj.map((social) => {
				if (e.target.id == social.name) {
					setSocialList[(prevArr) => [...prevArr, social]];
					return { ...social, url: '' };
				}
				return social;
			})
		);
	};

	return (
		<div className='flex w-full h-full gap-5'>
			<div className='w-2/3 h-full bg-white'>
				<div className='flex p-5 border-b-2 border-gray-300'>
					<div className='w-2/3'>
						<a
							href={`https://${storeLink}.creator-spring.com`}
							className='text-gray-500 text-xs'
						>
							{`https://${storeLink}.the-hive.com`}
						</a>
						<div
							className={`w-full ${
								isfocused ? '' : 'hover:bg-gray-200 link-form--container'
							} my-1`}
						>
							<form onSubmit={handleSubmit}>
								<input
									type='text'
									value={storeLink}
									onChange={handleChange}
									onFocus={() => setIsfocused(true)}
									onBlur={() => setIsfocused(false)}
									className='store-input'
									ref={linkInput}
								/>
							</form>
						</div>
						<div className='flex gap-5'>
							<a
								href={`https://${storeLink}.creator-spring.com`}
								className='text-gray-500 text-xs btn flex justify-center items-center gap-1'
							>
								<AiOutlineEye />
								View store
							</a>
							<button
								type='button'
								className='btn flex justify-center items-center gap-1 text-gray-500 text-xs'
								onClick={() => linkInput.current.focus()}
							>
								<FiEdit2 />
								Edit Name
							</button>
						</div>
					</div>
					<div className='flex justify-end w-1/3'>
						<button className='bg-black text-xs px-8 py-2 h-9 text-white'>
							Store editor
						</button>
					</div>
				</div>
				{/* Domains */}
				<div className='px-5 pt-6 pb-12 border-b-2 border-gray-300'>
					<h3 className='text-lg font-semibold'>Domains</h3>
					<p className='text-gray-500 text-xs my-3'>
						Connect a custom domain to your store
					</p>
					<div className='bg-gray-300 pt-2'>
						<div className='p-6 bg-gray-100'>
							<div className='flex flex-row md:flex-row bg-white justify-center items-center py-5 px-4 rounded-lg'>
								<div className='flex flex-col gap-3 bg-gray-200 py-3 px-5 rounded-lg items-center'>
									<TbWorld size={25} />
									<h3 className=''>Connect to existing domain</h3>
									<p className='text-xs'>$11.99/year</p>
									<button className='px-6 bg-blue-500 h-9 min-w-20 text-xs text-white btn-pill mb-7'>
										Activate
									</button>
								</div>
								<div className='flex flex-col gap-3 py-4 px-5 rounded-lg items-center'>
									<TbWorld size={25} />
									<h3 className=''>Purchase a new domain</h3>
									<p className='text-xs italic line-through text-gray-400'>
										$11.99/year
									</p>
									<button className='px-6 bg-blue-500 h-9 min-w-20 text-xs text-white btn-pill'>
										Purchase a domain
									</button>
									<p className='text-gray-400 mb-4 text text-2xs'>
										*Free connection when you buy a domain through Spring
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* socials profiles */}
				<div className='px-5 pt-6 pb-12 border-b-2 border-gray-300'>
					<h3 className='text-base font-semibold'>Social Profiles</h3>
					<p className='text-gray-500 text-xs my-3'>
						Display your social profile links on your store
					</p>
					<h6 className='text-xs font-extrabold'>Profile</h6>
					<div className='flex flex-col gap-2 my-1'>
						<div>
							{socialInfo.map((social) => {
								if (social.url != '') {
									const Icon = icons[social.name];
									return (
										<div
											key={social.name}
											className='flex w-full gap-5 text-xs py-3 px-1 bg-gray-200'
										>
											<Icon />
											<h3>{social.name}</h3>
											<a
												href={social.url}
												className='text-gray-400'
											>
												{social.url}
											</a>
											<div
												onClick={(e) => handleDelete(e)}
												id={social.name}
											>
												<button
													type='button'
													className='float-right pointer-events-none'
												>
													<GiCancel />
												</button>
											</div>
										</div>
									);
								}
							})}
						</div>

						<div
							className='flex gap-2 my-1'
							onClick={(e) => setModalOpen(true)}
						>
							<GrAddCircle />
							<p className='text-xs text-gray-600'> Add account Profile</p>
						</div>
					</div>
				</div>

				{/*social modal  */}
				{modalOpen && (
					<div className='w-screen h-screen animate-fade-in bg-blackOverlay absolute top-0 left-0 flex justify-center items-center'>
						<div className='bg-white rounded-lg p-5 modal-box -mt-5 relative'>
							<div onClick={() => setModalOpen(false)}>
								<GrClose className='bg-white rounded-full w-10 h-10 p-2 shadow-md absolute -right-5 -top-5' />
							</div>
							<h3 className='text-lg font-semibold mb-5'>
								Add a social profile
							</h3>
							<h6 className='text-sm font-extrabold'>Profile</h6>
							<form onSubmit={updateSocials}>
								<Select
									options={options}
									isSearchable={false}
									placeholder='Select profile'
									className='text-xs'
									styles={customStyle}
									onChange={(e) => {
										setSelectedSocials(e);
										setIsSelected(true);
									}}
									// defaultValue{}
								/>
								{isSelected && (
									<input
										type='url'
										className='link-input'
										value={linkInfo}
										onChange={(e) => setLinkInfo(e.target.value)}
									/>
								)}
								<button className='btn float-right bg-blue-500 text-white'>
									Add
								</button>
							</form>
						</div>
					</div>
				)}
			</div>

			<div className='w-1/3 p-3'>
				<div className='preview-wrap shadow-2xl rounded-lg'>
					{/* <iframe
						id='desktop preview'
						// class='storepreview'
						title='Desktop preview'
						src='https://my-store-d74da1.preview.teespring.com/#previewData=U2FsdGVkX19a0cgd8tfHKGI+QYri9uOt02KtXGjKU8SV/wpm5DIjK5OYdyNmi3iQ'
						className='frame-wrap'
						// style='background: rgb(255, 255, 255);'
					></iframe> */}
				</div>
			</div>
		</div>
	);
};

export default Stores;
