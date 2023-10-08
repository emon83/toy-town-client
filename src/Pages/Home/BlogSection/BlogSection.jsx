import "./BlogSection.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { blogData } from "./BlogData";
import SingleBlog from "./SingleBlog";

const BlogSection = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="my-container my-32">
      <div className="text-center px-6 md:px-0">
        <h2 className="text-3xl">Read Our Blog</h2>
        <p className="text-lg mt-4 mb-8 sm:mb-12">
          We celebrate childhood by supporting babies, children, and families
          <br />
          with thoughtful designs and quality materials.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6 sm:px-8 md:px-0">
        {blogData &&
          blogData.length > 0 &&
          blogData?.map((blog) => <SingleBlog key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
};

export default BlogSection;
