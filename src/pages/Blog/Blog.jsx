/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Blog = () => {
  return (
    <section className="px-4 py-16  md:px-24 lg:px-28 lg:py-20">
      <h2 className="text-center text-4xl font-bold text-gray-900">Question and Answer</h2>
      <div className="grid lg:grid-cols-3 gap-6 mt-10">
        <div className="space-y-4 border-2 p-4 border-dotted rounded-lg border-indigo-500">
          <h2 className="lg:text-2xl font-bold">1. Tell us the differences between uncontrolled and controlled components.</h2>
          <h3 className="text-lg font-semibold">controlled components:</h3>
          <ul className="list-decimal ml-5">
            <li>Does not maintain its internal state.</li>
            <li>Data is controlled by the parent component.</li>
            <li>Accepts its current value as a prop.</li>
            <li>Allows validation control.</li>
            <li>Better control over the form elements and data.</li>
          </ul>
          <h3 className="text-lg font-semibold">UNCONTROLLED COMPONENT:</h3>
          <ul className="list-decimal ml-5">
            <li>Maintains its internal state.</li>
            <li>Data is controlled by the DOM itself.</li>
            <li>Uses a ref for their current values.</li>
            <li>Does not allow validation control.</li>
            <li>Limited control over the form elements and data.</li>
          </ul>
        </div>
        {/* Q-2 */}
        <div className="space-y-4 border-2 p-4 border-dotted rounded-lg border-indigo-500">
          <h2 className="lg:text-2xl font-bold">2. How to validate React props using PropTypes</h2>
          <p className="text-gray-700 font-medium ">
            PropTypes is React’s internal mechanism for adding type checking to component props. React components use a special property called propTypes to set up type checking. When props are passed
            to a React component, they are checked against the type definitions configured in the propTypes property. When an invalid value is passed for a prop, a warning is displayed on the
            JavaScript console. <br /> <span className="text-red-500">Note:</span> that type checking propTypes can happen only in development mode, enabling to catch bugs in React application before
            releasing it to the production environment.
          </p>
          <h2>Below are the validate for the basic data types:</h2>
          <ul className="list-decimal ml-5">
            <li>PropTypes.any: The prop can be of any data type.</li>
            <li>PropTypes.bool: The prop should be a Boolean.</li>
            <li>PropTypes.number: The prop should be a number.</li>
            <li>PropTypes.string: The prop should be a string.</li>
            <li>PropTypes.func: The prop should be a function.</li>
            <li>PropTypes.array: The prop should be an array.</li>
            <li>PropTypes.object: The prop should be an object.</li>
            <li>PropTypes.symbol: The prop should be a symbol.</li>
          </ul>
        </div>
        {/* Q-3 */}
        <div className="space-y-4 border-2 p-4 border-dotted rounded-lg border-indigo-500">
          <h2 className="lg:text-2xl font-bold">3. Tell us the difference between nodejs and express js.</h2>
          <h3 className="text-lg font-semibold">Node.js:</h3>
          <ul className="list-decimal ml-5">
            <li>It is used to build server-side, input-output, event-driven apps.</li>
            <li>It is built on Google’s V8 engine.</li>
            <li>Run-time platform or environment designed for server-side execution of JavaScript.</li>
            <li>Controllers are not provided.</li>
            <li>Routing is not provided.</li>
            <li>It requires more coding time.</li>
          </ul>
          <h3 className="text-lg font-semibold">Express.js:</h3>
          <ul className="list-decimal ml-5">
            <li>It is used to build web-apps using approaches and principles of Node.js.</li>
            <li>It is built on Node.js.</li>
            <li>Framework based on Node.js.</li>
            <li> Controllers are provided.</li>
            <li>Routing is provided.</li>
            <li> It requires less coding time.</li>
          </ul>
        </div>
        {/* Q -4 */}
        <div className="space-y-4 border-2 p-4 border-dotted rounded-lg border-indigo-500">
          <h2 className="lg:text-2xl font-bold">2. What is a custom hook ?</h2>
          <p className="text-gray-700 font-medium lg:text-xl">
            As a result of using custom hook, we can reuse the code, which increases the readability of the code, as a result, many complex problems can be solved, when the same work or same code
            needs to be written repeatedly, we can solve this problem by using custom hook. (use) should be written at the beginning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
