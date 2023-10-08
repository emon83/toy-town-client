import bannerImg from '../../../assets/banner/hero.png'

const Banner = () => {
    return (
        <div className='relative'>
            <img src={bannerImg} alt="" />
       
            <div className="w-full absolute top-10 sm:top-24 lg:top-48 text-white flex flex-col">
            <h1 className='text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-bold primary-font text-center'>Toytown - Kids Toys Store</h1>
            <h2 className='secondary-font text-base sm:text-2xl lg:text-4xl font-bold text-center -mt-2 mb-3 sm:my-6'>Explore Our Exclusive Store</h2>
            <div className='text-center'>
                <button className='btn uppercase btn-color border-none rounded-3xl text-xs sm:text-sm md:text-base btn-xs sm:btn-md px-2 sm:px-6'>Learn More</button>
            </div>
        </div>
        </div>
    );
};

export default Banner;