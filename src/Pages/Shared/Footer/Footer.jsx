import "./Footer.css";
import logo from '../../../assets/logo/logo.png'
import { BsFacebook, BsInstagram, BsTwitter ,BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-footer">
      <footer className="footer px-10 lg:px-32 py-10 lg:py-32 text-base-content">
        <div>
         <img className="w-40" src={logo} alt="" />
          <p className="text-base text-gray-600 mt-4">
          Welcome to our toy website, where imagination <br /> comes to life!  Discover a world of endless <br /> fun  and excitement as you browse  through <br /> our wide selection of toys for all ages.
          </p>
          <div className="flex gap-6 mt-6 text-gray-700">
            <BsFacebook className="w-6 h-6"/>
            <BsInstagram className="w-6 h-6"/>
            <BsYoutube className="w-6 h-6"/>
            <BsTwitter className="w-6 h-6"/>
          </div>
        </div>
        <div className="space-y-4 text-base">
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div className="space-y-4 text-base">
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div className="space-y-4 text-base">
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="text-center text-base font-semibold">
        <p>© 2023 All rights reserved!</p>
      </div>
    </div>
  );
};

export default Footer;
