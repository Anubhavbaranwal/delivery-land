import { useState } from "react";
import contact from "../../assets/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact-container flex justify-evenly ">
      <div className=" w-2/5 justify-end text-end">
        <img src={contact} alt="" className=" text-center p-20" />
      </div>
      <div className=" w-2/5 justify-center mb-6 group relative ">
        <h1 className="text-5xl font-bold p-12">Contact us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-white border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5  dark:border-blue-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 my-5 shadow-md shadow-grey-100 "
            placeholder="Name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-white border border-blue-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5  dark:border-blue-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 my-5 shadow-md shadow-grey-100"
            required
          />
          <textarea
            placeholder="Type your Message here..."
            className="bg-white border border-blue-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5  dark:border-blue-400 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 my-5 h-20 shadow-md shadow-grey-100 "
            required
          ></textarea>
          <button
            type="submit"
            className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2"
          >
            Submit
          </button>
          {message && (
            <span>
              Thanks for contacting Delivery Land, We will reply ASAP.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
