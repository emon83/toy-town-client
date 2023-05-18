import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-bg -mt-4 text-white">
            <h1 className='text-7xl font-bold primary-font pt-60 text-center'>Toytown - Kids Toys Store</h1>
            <h2 className='secondary-font text-4xl font-bold text-center my-6'>Explore Our Exclusive Store</h2>
            <div className='text-center'>
                <button className='btn uppercase bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-md px-6'>Learn More</button>
            </div>
        </div>
    );
};

export default Banner;