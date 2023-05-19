import { useEffect, useState } from "react";
import "./ShopByCategory.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [scienceToys, setScienceToys] = useState([]);
  const [languageToys, setLanguageToys] = useState([]);
  const [engineeringToys, setEngineeringToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categoryProducts/6466626892057caaca2bb6db")
      .then((res) => res.json())
      .then((data) => setScienceToys(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/categoryProducts/6466626892057caaca2bb6dc")
      .then((res) => res.json())
      .then((data) => setLanguageToys(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/categoryProducts/6466626892057caaca2bb6dd")
      .then((res) => res.json())
      .then((data) => setEngineeringToys(data));
  }, []);
  console.log(scienceToys[0]?.toys);
  return (
    <div className="mt-28 my-container">
      <div className="text-center">
        <h2 className="text-5xl font-bold primary-font">Shop by category</h2>
        <p className="text-lg secondary-font my-6 text-gray-600">
          We’ve picked few pieces we’re pretty sure you’ll love. <br />
          Check back often and enjoy.
        </p>
      </div>
      <div className="mt-10">
        <Tabs>
          <TabList className="mx-auto text-center flex items-center justify-center gap-2">
            <Tab className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6">Science Toys</Tab>
            <Tab className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6">Language Toys</Tab>
            <Tab className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6">Engineering Toys</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {scienceToys[0]?.toys.map((toy) => (
                <div key={toy._id} className="p-6 text-center">
                  <img src={toy.toyImage} alt="" />
                  <h4>{toy.toyName}</h4>
                  <p>${toy.price}</p>
                  <p>{toy.rating}</p>
                  <label htmlFor="my-modal-5" className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-4">
                  View Details</label>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {languageToys[0]?.toys.map((toy) => (
                <div key={toy._id} className="p-6 text-center">
                <img src={toy.toyImage} alt="" />
                <h4>{toy.toyName}</h4>
                <p>${toy.price}</p>
                <p>{toy.rating}</p>
                <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6">View Details</button>
              </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringToys[0]?.toys.map((toy) => (
              <div key={toy._id} className="p-6 text-center">
              <img src={toy.toyImage} alt="" />
              <h4>{toy.toyName}</h4>
              <p>${toy.price}</p>
              <p>{toy.rating}</p>
              <button className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6">View Details</button>
            </div>
            ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShopByCategory;
