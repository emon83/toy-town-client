/* eslint-disable react/no-unescaped-entities */
import "./Blog.css";

const Blog = () => {
  return (
    <div className="bg-cyan-50 pt-4 pb-20">
      <div className="blog__section">
        <div className="text-lime-900">
          <h1 className="text-4xl font-bold text-center pt-10 pb-2 lg:pb-6">
            Frequently Asked Question
          </h1>
        </div>
        <div className="px-4 lg:mx-12 my-10 pb-6">
          <h2 className="text-2xl font-bold mb-">
            Q:1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <div className="font-semibold mb-8 mt-2 space-y-2">
            <p>
              Access Token: An access token is a credential that is issued by an
              authentication server after a user successfully logs in or
              authenticates. It is a short-lived token with an expiration time,
              typically lasting from a few minutes to a few hours.
            </p>
            <p>
              Refresh Token: A refresh token is also issued by the
              authentication server, but it has a longer expiration time
              compared to the access token. The purpose of a refresh token is to
              obtain a new access token once the current access token expires.
              It is securely stored by the client-side application.
            </p>
            <p>
              Here's a simplified workflow of how access tokens and refresh
              tokens are used: A access token given to you when you log in and
              allows you to access certain things, like entering a restricted
              area. You show this slip whenever you want to access those things.
              When your permission slip (access token) is about to expire, you
              exchange the refresh token to get a new permission slip, so you
              can keep accessing things without logging in again.
            </p>
            <p>
              Access tokens should be stored in memory rather than persistently
              on the client-side, as it reduces the risk of token leakage. On
              the other hand, refresh tokens should be securely stored,
              typically in an HTTP-only cookie or a secure storage mechanism
              provided by the platform.
            </p>
          </div>
          <br />
          <h2 className="text-2xl font-bold mb-">
            Q:2. Difference between SQL and NoSQL databases?
          </h2>
          <div className="font-semibold mb-8 mt-2 space-y-2">
            <p>SQL (Structured Query Language) Databases:</p>            
             <p>
             1. SQL databases are structured and organized using tables with predefined schemas. <br />
             2. They are suitable for complex data relationships and transactions. <br />
             3. SQL databases ensure data integrity, enforce consistency, and support powerful querying with SQL. <br />
             4. Examples include MySQL, PostgreSQL, and Oracle.
             </p>
            
            <p>NoSQL (Not Only SQL) Databases:</p>
             <p>
             1. NoSQL databases are schema-less and store data in a flexible, non-tabular format. <br />
             2. They are designed for scalability, high performance, and handling large amounts of unstructured or semi-structured data. <br />
             3. NoSQL databases allow flexible data models and horizontal scaling across multiple servers. <br />
             4. Examples include MongoDB, Cassandra, and Redis.
             </p>
          </div>
          <br />
          <h2 className="text-2xl font-bold mb-">
            Q:3. What is express js? What is Nest JS?
          </h2>
          <div className="font-semibold mb-8 mt-2 space-y-2">
            <p>
            Express js: Express.js is a minimalist and flexible web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of robust features and utilities. Express.js offers a lightweight and unopinionated approach, allowing developers to choose their preferred libraries and tools.
            </p>
           <p>
           Nest JS: NestJS is a progressive, modular, and TypeScript-based web application framework. It is built on top of Express.js and provides additional features and architectural patterns for building scalable and maintainable applications. NestJS follows the principles of Dependency Injection and uses decorators and modules for organizing code.
           </p>
          </div>
          <br />
          <h2 className="text-2xl font-bold mb-">
            Q:4. What is MongoDB aggregate and how does it work?
          </h2>
          <div className="font-semibold mb-4 mt-2 space-y-2">
            MongoDB Aggregation: MongoDB aggregation is a framework for performing advanced data processing operations on MongoDB collections. 
            <p>
            It allows you to perform complex data transformations, aggregations, calculations, and analytics on your data.  
            </p>
            <p>Aggregation pipelines in MongoDB consist of multiple stages that process documents sequentially.</p>
            <p>Each stage performs a specific operation, such as filtering, grouping, sorting, projecting, joining, or calculating aggregates.</p>
            <p>Aggregation pipelines can be constructed using operators like $match, $group, $project, $sort, $lookup, and many more.</p>
            <p>MongoDB aggregation provides a powerful way to process and analyze your data using a series of operations called stages. Each stage performs a specific task, and by combining these stages, you can perform complex calculations, grouping, filtering, and more on your MongoDB collections.</p>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Blog;
