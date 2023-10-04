const SingleBlog = ({blog}) => {
    return (
        <div>
            <img src={blog.m_b_img} alt="" />
            <h4 className="text-2xl my-2">{blog.m_title}</h4>
            <p className="mb-2 text-gray-600">{blog.m_b_description}</p>
            <button className="btn btn-sm">Read More</button>
        </div>
    );
};

export default SingleBlog;