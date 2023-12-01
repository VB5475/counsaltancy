


import { useState } from "react";

const Table = (props) => {



const {loan,about,min_rate,max_rate} = props.info;


  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["About", "Intrest Rates", "Documents", "Eligibility"];

  const handleTabClick = (index) => {
    setActiveTab(index);
    

    document.getElementById(`${index}`).scrollIntoView({
      behavior: 'smooth',
    });
  };


  
  return (
    <div className='bg-white'>

<ul className="fixed top-0 left-0 right-0 flex justify-center items-center p-2 gap-x-4 bg-gray-100 border-b-2  shadow-xl z-10">
  {tabs.map((tab, index) => (
    <li
      key={index}
      className={`cursor-pointer py-2 px-4 text-gray-900 ${
        activeTab === index ? 'border-b-4 border-green-400 font-medium text-lg' : ''
      }`}
      onClick={() => handleTabClick(index)}
    >
      {tab}
    </li>
  ))}
</ul>

  
  
{/* intro */}

      <section id='0' className="text-gray-600 body-font ">
        <div className="container px-5  pt-36 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">SGC {loan} </h1>
              <div className="h-1 w-20 bg-green-400 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-700 bg-gray-200 rounded-md border-2 p-2 -mt-1 border-gray-400 drop-shadow-xl">{about}</p>
          </div>

        </div>
      </section>





      {/* range table  */}
      <section id='1' className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div  className="flex flex-col text-center w-3/4 mx-auto ">
            <h1  className="sm:text-4xl text-3xl font-medium title-font mb-10 text-gray-900 border-b-4 pb-2 border-green-400"> {props.loan} Interest Rates</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">All rates are benchmarked to Policy Repo Rate. Current applicable Repo Rate = 6.50%</p>
          </div>
        </div>
      </section>
      <div   className="w-screen overflow-x-auto place-content-center">
        <div className="overflow-hidden w-3/4 mx-auto" >
          <div className="grid grid-cols-3 p-4 text-sm font-medium text-gray-900 bg-green-400 border-t border-b border-gray-400 gap-x-16 ">
            <div className="flex items-center">Loan Slab</div>
            <div>Intrests Starts From</div>
            <div>To</div>

          </div>
          <div className="grid grid-cols-3 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">{loan} </div>
            <div className="text-black ">{min_rate}% </div>
            <div className="text-black ">{max_rate}% </div>



          </div>

        </div>
      </div>




      {/* document table */}

      <section id ='2' className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div  className="flex flex-col text-center w-full ">
            <h1  className="sm:text-4xl text-3xl font-medium title-font mb-10 text-gray-900 border-b-4 pb-2 border-green-400">Documents</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">For {props.loan} approval, you need to submit the following documents for applicant / all co-applicants along with the completed and signed {props.loan} application form.</p>
          </div>

        </div>
      </section>
      <div  className="w-screen overflow-x-auto place-content-center">
        <div className="overflow-hidden w-3/4 mx-auto" >
          <div className="grid grid-cols-2 p-4 text-sm font-medium text-gray-900 bg-green-400 border-t border-b border-gray-400 gap-x-16 ">
            <div className="flex items-center">Document Name</div>
            <div>Required</div>
            

          </div>
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Aadhar Card</div>

            <div>
              <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </div>
           

          </div>
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Election Card </div>
            <div>
              <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </div>
           

          </div>
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Pan Card</div>
            <div>
              <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </div>
           
          </div>
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Income Tax Return (3 years)</div>
            <div>
              <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </div>
           
          </div>

          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Electricity bill (Home or Buisness)</div>
            <div>
              <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </div>
           
          </div>
          
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Bank Statement (last 1 Year)</div>
            <div>
              <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </div>
           
          </div>
          
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Udayam Aadhar (if applicable)</div>
            <div>
              <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </div>
           
          </div>
          
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">2 Pictures of Passport Size</div>
            <div>
              <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
              </svg>
            </div>
           
          </div>

        </div>
      </div>




     


      {/* eligibility */}

      <section id='3' className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div  className="flex flex-col text-center w-full ">
            <h1  className="sm:text-4xl text-3xl font-medium title-font mb-10 text-gray-900 border-b-4 pb-2 border-green-400">{loan} Eligibility</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{loan} eligibility is primarily dependent on income and repaying capacity. Other important factors include the customer’s profile, age at loan maturity, age of property at loan maturity, investment and savings history etc. </p>
          </div>

        </div>
      </section>
      <div  className="w-screen overflow-x-auto place-content-center">
        <div className="overflow-hidden w-3/4 mx-auto" >
          <div className="grid grid-cols-2 p-4 text-sm font-medium text-gray-900 bg-green-400 border-t border-b border-gray-400 gap-x-16 ">
            <div className="flex items-center">Important Factor</div>
            <div>Criteria</div>


          </div>
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Age</div>
            <div className="text-black ">18-70 Years</div>


          </div>
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Profession</div>
            <div className="text-black ">Salaried/Self Employed</div>


          </div>
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Nationality</div>
            <div className="text-black ">Resident Indian</div>


          </div>
          <div className="grid grid-cols-2 px-4 py-5 text-sm text-gray-700 border-b border-gray-400 gap-x-16 dark:border-gray-700">
            <div className="text-black ">Tenure</div>
            <div className="text-black ">Depends On Loan</div>


          </div>
         

        </div>
      </div>













    </div>


  );
}

export default Table;
