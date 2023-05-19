import './BlogSection.css'
import { AiFillClockCircle } from 'react-icons/ai';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const BlogSection = () => {
    useEffect(() => {
        Aos.init();
      }, []);
    return (
        <div className='my-container my-32'>
            <div className='text-center'>
            <h2 className='text-5xl primary-font'>From The Blog</h2>
            <p className='text-lg secondary-font mt-6'>We celebrate childhood by supporting babies, children, and families <br />with thoughtful designs and quality materials.</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='mt-10' data-aos="fade-up">
                    <img src="https://i.ibb.co/9cTvTzT/bs-blog-1-640x640.jpg" alt="" />
                    <h4 className='text-xl font-bold secondary-font'>Why February Babies Are Extra Special</h4>
                    <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        <img className='w-6 h-6 rounded-full' src="https://i.ibb.co/9qTN6HG/about-img2.jpg" alt="" />
                        <small>Dimitar Koev</small>
                    </div>
                    <div className='flex items-center'>
                        <AiFillClockCircle/>
                        <small>May 6,2023</small>
                    </div>
                    </div>
                </div>
                <div className='mt-10' data-aos="fade-up">
                    <img src="https://i.ibb.co/64VRTD6/bs-blog-2-640x640.jpg" alt="" />
                    <h4 className='text-xl font-bold secondary-font'>The Surprising way Motherhood changed Me</h4>
                    <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        <img className='w-6 h-6 rounded-full' src="https://i.ibb.co/9qTN6HG/about-img2.jpg" alt="" />
                        <small>Dimitar Koev</small>
                    </div>
                    <div className='flex items-center'>
                        <AiFillClockCircle/>
                        <small>May 6,2023</small>
                    </div>
                    </div>
                </div>
                <div className='mt-10' data-aos="fade-up">
                    <img src="https://i.ibb.co/qDGGRxP/bs-blog-3-640x640.jpg" alt="" />
                    <h4 className='text-xl font-bold secondary-font'>How Aromatherapy Can Impact NICU Babies</h4>
                    <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        <img className='w-6 h-6 rounded-full' src="https://i.ibb.co/9qTN6HG/about-img2.jpg" alt="" />
                        <small>Dimitar Koev</small>
                    </div>
                    <div className='flex items-center'>
                        <AiFillClockCircle/>
                        <small>May 6,2023</small>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;