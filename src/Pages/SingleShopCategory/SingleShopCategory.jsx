import { useLoaderData } from "react-router-dom";
import { CgDanger } from 'react-icons/cg';
import { FaHandsWash } from 'react-icons/fa';
import { MdEmojiTransportation } from 'react-icons/md';
import { TbIroningOff } from 'react-icons/tb';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'


const SingleShopCategory = () => {
    const data = useLoaderData();
    console.log(data[0]);
    const {availableQuantity, category,detailsDescription, price, rating, toyImage, toyName, sellerName, email } = data[0];
    return (
        <div>
           <div className="lg:flex gap-10 my-container lg:w-[1340px]">
            <div className="lg:w-1/2">
                <img className="" src={toyImage} alt="" />
            </div>
            <div className="lg:w-1/2">
                <h2 className="secondary-font text-4xl font-bold">{toyName}</h2>
                <p className="text-gray-600 font-light mt-6 mb-4">{detailsDescription}</p>
                <div className="flex items-center gap-1">
                <p className="text-xl">${price}</p>
                <span className="badge badge-lg bg-yellow-100 border-none text-black my-4">In stock</span>
                </div>
                <div>
                    <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl px-6 my-4">ADD TO CART</button>
                </div>
                <p className="my-4">Categories: <span className="badge badge-md bg-gray-100 border-none text-gray-600">{category}</span></p>
                <p>Available Quantity: {availableQuantity}</p>
                <div className="flex items-center my-4">
                <Rating style={{ maxWidth: 100 }} value={5} />
                <p>{rating}</p>
                </div>
                <div className="flex items-center gap-4 text-sm font-semibold text-gray-600">
                    <p>Seller: {sellerName}</p>
                    <p>Email: {email}</p>
                </div>
            </div>
           </div>
           <div className="bg-cyan-50 pb-10 my-20">
                <div className="my-container">
                    <div className="flex justify-center items-center text-center py-10 gap-4">
                        <button className="btn  bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl px-6 my-4">Description</button>
                        <p className="text-lg font-semibold">Reviews (10)</p>
                    </div>
                    <div className="lg:flex w-full gap-10">
                        <div className="lg:w-1/2">
                        <h4 className="text-xl font-semibold mb-4">DETAILS</h4>
                        <p className="font-light my-2">{detailsDescription}</p>
                        <p className="font-light">Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</p>
                        </div>
                        <div className="lg:w-1/2">
                            <h4 className="text-xl font-semibold">CARE INSTRUCTIONS</h4>
                            <p className="font-light my-2">We don’t like to label, but this one comes in handy. Follow the instructions on the label before you wash this product or give it to your mom – she knows how to do it.</p>
                            <div className="flex items-center gap-4 my-2">
                                <CgDanger className="w-8 h-8"/>
                                <FaHandsWash className="w-8 h-8"/>
                                <MdEmojiTransportation className="w-8 h-8"/>
                                <TbIroningOff className="w-8 h-8"/>
                            </div>
                            <p className="font-light my-2"><span className="font-bold">Composition:</span>Our toy shop website is a treasure trove of playtime wonders, carefully curated to inspire and delight. From classic toys that have stood the test of time to the latest cutting-edge innovations, we offer a diverse range of products that cater to every age, interest, and imagination.</p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default SingleShopCategory;