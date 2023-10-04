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
      <div className="text-center">
        <h2 className="text-5xl primary-font">Read Our Blog</h2>
        <p className="text-lg secondary-font mt-6">
          We celebrate childhood by supporting babies, children, and families{" "}
          <br />
          with thoughtful designs and quality materials.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {blogData &&
          blogData.length > 0 &&
          blogData?.map((blog) => <SingleBlog key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
};

export default BlogSection;
