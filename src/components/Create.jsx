import React from 'react';

import './create.css';

const Create = () => {
	return (
		<div className='px-10 w-full relative'>
			<nav className='flex gap-5 items-center py-5 pl-10 text-sm font-light fixed top-0 left-52 bg-white w-full'>
				<a href='#'>New Products</a>
				<a href='#'>Best Sellers</a>
				<a href='#'>Apparel</a>
				<a href='#'>Hats</a>
				<a href='#'>Digital</a>
				<a href='#'>Accessories</a>
				<a href='#'>Collections</a>
				<a href='#'>Home Decor</a>
			</nav>
			<div className='mt-16 flex flex-col gap-8'>
				<section className='flex flex-col'>
					<h2 className='text-2xl font-normal'>Best Sellers</h2>

					<div className='flex justify-center items-center gap-6 mt-4'>
						<div className='rounded-lg'>
							<img
								src='https://teespring-ass.s3.amazonaws.com/launcher/featured-products/featured_product_promo_2_teedown.png'
								alt='Product image'
							/>
						</div>
						<div className='rounded-lg'>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/launcher/featured-products/featured_product_promo_3_teedown.png'
								alt='Product image'
							/>
						</div>
						<div className='rounded-lg'>
							<img
								src='https://teespring-ass.s3.amazonaws.com/launcher/featured-products/featured_product_promo_4_teedown.png'
								alt='Product image'
							/>
						</div>
					</div>

					<div className='flex justify-center items-center mt-8 text-sm font-light'>
						<div>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/catalog_image_2148_1666117721691.png'
								alt='product'
							/>
							<div>
								<h3>Dad Cap</h3>
								<p>100% Cotton</p>
								<p>Base Cost: N2000</p>
							</div>
						</div>
						<div>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/catalog_image_2149_1666117702689.png'
								alt='product'
							/>
							<div>
								<h3>Snapback</h3>
								<p>100% Cotton</p>
								<p>Base Cost: N2000</p>
							</div>
						</div>
						<div>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/catalog_image_2150_1666117738055.png'
								alt='product'
							/>
							<div>
								<h3>Tucker hat</h3>
								<p>100% Cotton</p>
								<p>Base Cost: N2000</p>
							</div>
						</div>
						<div>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/catalog_image_2152_1666117811201.png'
								alt='product'
							/>
							<div>
								<h3>Beanie</h3>
								<p>100% Cotton</p>
								<p>Base Cost: N2000</p>
							</div>
						</div>
					</div>
				</section>

				<section>
					<h2 className='text-2xl font-normal'>New Products</h2>
					<div className='flex justify-center items-center gap-5 mt-4 text-sm font-light'>
						<div className='card flex flex-col gap-4'>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/watchband_black_catalog_image.png'
								alt='product'
							/>
							<div>
								<h3>Beanie</h3>
								<p>Base Cost: N2000</p>
							</div>
						</div>
						<div className='card flex flex-col gap-4'>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/notebook_catalog_image_teedown.png'
								alt='product'
							/>
							<div>
								<h3>NoteBook</h3>
								<p>Base Cost: N2000</p>
							</div>
						</div>
						<div className='card flex flex-col gap-4'>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/desk_mat_catalog_image.png'
								alt='product'
							/>
							<div>
								<h3>DeskMat</h3>
								<p>Base Cost: N2000</p>
							</div>
						</div>
						<div className='card flex flex-col gap-4'>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/teespring-resized/accessories/iphone_clear_case_catalog_image_teedown.png'
								alt='product'
							/>
							<div>
								<h3>Beanie</h3>
								<p>Base Cost: N2000</p>
							</div>
						</div>
					</div>
				</section>

				<section className='mb-16'>
					<h2 className='text-2xl font-normal mb-4'>Trending Categories</h2>
					<div className='flex justify-center items-center gap-5'>
						<div className='cate-card'>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/featured_categories/digital.png'
								alt='category'
							/>
							<h5>Digital</h5>
						</div>
						<div className='cate-card'>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/featured_categories/accessories.png'
								alt='category'
							/>
							<h5>Accessories</h5>
						</div>
						<div className='cate-card'>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/featured_categories/apparel.png'
								alt='category'
							/>
							<h5>Clothings</h5>
						</div>
						<div className='cate-card'>
							<img
								src='https://d1b2zzpxewkr9z.cloudfront.net/teespring-product-catalog-images/featured_categories/home.png'
								alt='category'
							/>
							<h5>Home</h5>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Create;
