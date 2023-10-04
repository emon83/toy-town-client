const SingleBlog = ({blog}) => {
    return (
        <div>
            <img src={blog.m_b_img} alt="" />
            <h4>{blog.m_title}</h4>
            <p>{blog.m_b_description}</p>
            <button className="btn btn-sm">Read More</button>
        </div>
    );
};

export default SingleBlog;