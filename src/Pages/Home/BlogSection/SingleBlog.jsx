const SingleBlog = ({ blog }) => {
  return (
    <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-0">
      <img
        className="rounded-sm hover:scale-105 duration-[1500ms]"
        src={blog.m_b_img}
        alt="Blog Image"
      />
      <h4 className="text-2xl mt-4 mb-2">{blog.m_title}</h4>
      <p className="mb-2 text-gray-600">{blog.m_b_description}</p>
      <button className="btn btn-sm btn-color border-none mt-2">
        Read More
      </button>
    </div>
  );
};

export default SingleBlog;
