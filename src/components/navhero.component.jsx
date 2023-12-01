
import { Link } from "react-router-dom";
import Partners from "./partners.component";
import React, { useState,useEffect } from 'react';
import Refresh from "./refresh.component";
import Navbar from "./navbar.component";
// Initialization for ES Users

const NavHero = () => {

  const [isModalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    // This effect will run when the component mounts or updates
    // We'll use it to control the modal's visibility
    const handleEscKeyPress = (event) => {
      if (event.key === 'Escape') {
        setModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKeyPress);
    } else {
      document.removeEventListener('keydown', handleEscKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, [isModalOpen]);


  // another nav bar
  // Initialization for ES Users
  // for form to sheet
  function test() {

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw8IJ8HuUnZK93Nm1mjZymMo5ZAU0Im8EVQN5-IiDWGyYZaYF14nqLTc7JnBRfJVneceA/exec";
    const form = document.forms["Sheet1"];

    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent the default form submission

      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          alert("Thanks for Contacting us..! We Will Contact You Soon...")
        })
        .catch((error) => console.error("Error!", error.message));
    });
  }

  return (
    <>



     









      {/* drop nav here */}


      {/* <!-- Section: HEro Section --> */}
      <div className="relative ">
        <img
          src="https://brainheaterspublicbucket.s3.ap-south-1.amazonaws.com/studyroom/1692995682_handsome-businessman-signing-contract-with-partner.jpg"
          className="absolute inset-0 object-cover w-full h-full border-b-2 border-white"
          alt=""
        />
        <div className="relative bg-opacity-75 bg-deep-purple-accent-700 ">
          <svg
            className="absolute inset-x-0 bottom-0 text-white "
            viewBox="0 0 1160 163"
          >
            <path
              fill="currentColor"
              // d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
              d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
          </svg>
          <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                {/* <div className="border-b-4 border-gray-500 mb-6">
                  <span className="max-w-lg  font-sans text-3xl font-bold tracking-tight text-red-900 pr-3 sm:text-4xl sm:leading-none">
                    SHREE
                  </span>
                  <span className="max-w-lg  font-sans text-3xl font-bold tracking-tight text-yellow-600 pr-2 sm:text-4xl sm:leading-none">
                    GANESH
                  </span>
                  <br />
                  <span className="max-w-lg  font-sans text-3xl font-bold tracking-tight text-gray-500  sm:text-4xl sm:leading-none">
                    CONSULTANCY
                  </span>
                  <h3 className="max-w-lg mb-2 font-sans text-2xl font-bold tracking-tight text-red-900 sm:text-2xl sm:leading-none">
                    A COMPLETE LOAN HUB
                  </h3>
                </div>

                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                  Empowering Financial Aspirations Welcome to Shree Ganesh
                  Consultancy, your trusted partner in securing tailored loan
                  solutions across diverse sectors. Experience financial growth
                  with expertise.
                </p>
                <Link
                  to="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#products");
                    target.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center text-blue-600 font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700 hover:text-gray-100 "
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </Link> */}
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Contact
                  </h3>
                  <form
                    name="Sheet1"
                    action="https://script.google.com/macros/s/AKfycbw8IJ8HuUnZK93Nm1mjZymMo5ZAU0Im8EVQN5-IiDWGyYZaYF14nqLTc7JnBRfJVneceA/exec"
                    method="POST"
                    
                  >
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="name"
                        className="inline-block mb-1 font-medium"
                      >
                        Name
                      </label>
                      <input
                        placeholder="John"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="number"
                        name="Name"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="number"
                        className="inline-block mb-1 font-medium"
                      >
                        Contact Number
                      </label>
                      <input
                        placeholder="9624282869"
                        required
                        type="tel"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="number"
                        name="Number"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        Email
                      </label>
                      <input
                        placeholder="john.doe@example.org"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="Email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="requirment"
                        className="inline-block mb-1 font-medium"
                      >
                        Requirment
                      </label>
                      <input
                       placeholder="ask me your requirment"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="requirment"
                        name="Requirment"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        name="Submit"
                        type="btn"
                        onClick={() => test()}
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-gray-200 hover:bg-green-400 hover:border-white focus:shadow-outline border-2 border-green-400 focus:outline-none"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Refresh isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default NavHero;
