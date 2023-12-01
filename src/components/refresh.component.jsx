import React from 'react';

const Refresh = ({ isOpen, onClose }) => {

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
    <div
      id="refresh-modal"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="bg-white rounded-lg shadow-md relative max-w-md w-full">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* Rest of your form content */}
          <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
name="Sheet1"
action="https://script.google.com/macros/s/AKfycbw8IJ8HuUnZK93Nm1mjZymMo5ZAU0Im8EVQN5-IiDWGyYZaYF14nqLTc7JnBRfJVneceA/exec"
method="POST" >
    <h3 className="text-xl font-medium text-gray-900 ">Tell Us Your Requirments</h3>
    <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2 ">Name</label>
        <input type="text" name="Name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "  placeholder="John" required=""/>
    </div>
    <div>
        <label htmlFor="number" className="text-sm font-medium text-gray-900 block mb-2 ">Contact Number</label>
        <input type="tel" name="Number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    "  placeholder="9624282869" required=""/>
    </div>
    <div>
        <label  htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 ">Email</label>
        <input type="email" name="Email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    " placeholder="john.doe@example.org" required=""/>
    </div>
    <div>
        <label htmlFor="requirment" className="text-sm font-medium text-gray-900 block mb-2 ">Requirment</label>
        <input type="text" name="Requirment" id="requirment" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5    " placeholder="ask me your requirment" required=""/>
    </div>
    <div className="flex justify-between">
       
    </div>
    <button 
       name="Submit"
       type="btn"
       onClick={() => test()}
       className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-200 rounded shadow-md bg-gray-200 hover:bg-green-400 hover:border-white focus:shadow-outline border-2 border-green-400 focus:outline-none"
   >Submit</button>
   
</form>
        </div>
      </div>
    </div>
  );
};

export default Refresh;


