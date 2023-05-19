import { useEffect, useState } from "react";
import "./ShopByCategory.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Link } from "react-router-dom";
//import CateGoryToyDetails from "../../CategoryToyDetails/CateGoryToyDetails";

const ShopByCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [activeTab, setActiveTab] = useState("scienceSubCategory");


  useEffect(() => {
    fetch(`http://localhost:5000/${activeTab}`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, [activeTab]);


  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
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
            <Tab onClick={() => handleTabClick("scienceSubCategory")} className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6">Science Toys</Tab>
            <Tab onClick={() => handleTabClick("languageSubCategory")} className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6">Language Toys</Tab>
            <Tab onClick={() => handleTabClick("engineeringSubCategory")} className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-6">Engineering Toys</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categoryData &&
              categoryData.map((toy) => (
                <div key={toy._id} className="p-6 text-center">
                  <img src={toy.toyImage} alt="" />
                  <h4>{toy.toyName}</h4>
                  <p>${toy.price}</p>
                  <p>{toy.rating}</p>
                 <Link to={`categoryToyDetails/${toy._id}`}>
                 <button  className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-4">Details</button>
                 </Link>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categoryData && categoryData.map((toy) => (
                <div key={toy._id} className="p-6 text-center">
                <img src={toy.toyImage} alt="" />
                <h4>{toy.toyName}</h4>
                <p>${toy.price}</p>
                <p>{toy.rating}</p>
                <Link to={`categoryToyDetails/${toy._id}`}>
                 <button  className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-4">Details</button>
                 </Link>
              </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categoryData && categoryData.map((toy) => (
              <div key={toy._id} className="p-6 text-center">
              <img src={toy.toyImage} alt="" />
              <h4>{toy.toyName}</h4>
              <p>${toy.price}</p>
              <p>{toy.rating}</p>
              <Link to={`categoryToyDetails/${toy._id}`}>
                 <button  className="btn bg-pink-500 hover:bg-pink-600 border-none h-4 rounded-3xl btn-sm px-4">Details</button>
                 </Link>
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
