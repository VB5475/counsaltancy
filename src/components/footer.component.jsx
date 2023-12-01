import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {


  const vb = '+91-9624282869';

  return (
    <>
      <footer id="help" className="text-gray-900 body-font bg-gray-100 border-t-2 border-green-400">
        <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-1/5 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">

            <img src="https://brainheaterspublicbucket.s3.ap-south-1.amazonaws.com/studyroom/1692990638_SGC_Logo-03-fotor-bg-remover-20230825234526.png" alt="Your Image" class="w-full md:w-full h-full text-white " />
           <a href="https://goo.gl/maps/uvzST7AKTmStA4bf9" className="flex pt-1 pl-2"> 
           <img src="https://brainheaterspublicbucket.s3.ap-south-1.amazonaws.com/studyroom/1693214705_location-sign-svgrepo-com.png" alt="Your Image" class="w-1/6 h-1/6 text-white mt-1 " />
           
           <p className=" mt-2 ml-2 text-xs text-gray-900"> 303, 3rd Floor, Ratnadeep Complex, Above ICICI Bank, Waghavadi Road, Bhavnagar-364002 </p>
            
           </a> 
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-green-400 tracking-widest text-lg mb-3">USEFUL LINKS</h2>
              <nav className="list-none mb-10 text-base font-medium">
                <li>
                  <Link to='/homeloan' className="text-gray-900 hover:text-blue-600">Home loan</Link>
                </li>
                <li>
                  <Link to='/buisnessloan' className="text-gray-900 hover:text-blue-600">Buisness loan</Link>
                </li>
                <li>
                  <Link to='/carloan' className="text-gray-900 hover:text-blue-600">Car Loan</Link>
                </li>
                <li>
                  <Link to='/workingcapital' className="text-gray-900 hover:text-blue-600">Working Capital </Link>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-3/4 w-full ">
              <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-5">USEFUL LINKS</h2>
              <nav className="list-none mb-5 text-base font-medium">
                <li>
                  <Link to='/mortgageloan' className="text-gray-900 hover:text-blue-600">Mortgage loan</Link>
                </li>
                <li>
                  <Link to='/personalloan' className="text-gray-900 hover:text-blue-600">Personal Loan</Link>
                </li>
                <li>
                  <Link to='/commercialvehicleloan' className="text-gray-900 hover:text-blue-600">Commercial Vehicle Loan</Link>
                </li>
                <li>
                  <Link to='/insuarrances' className="text-gray-900 hover:text-blue-600">Insuarance</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full pl-5 pr-4">
              <h2 className="title-font font-medium text-gray-100 tracking-widest text-sm mb-5">USEFUL LINKS</h2>
              <nav className="list-none mb-5 text-base font-medium">
                <li>
                  <Link to='/commercialloan' className="text-gray-900 hover:text-blue-600">Commercial Loan</Link>
                </li>
                <li>
                  <Link to='/projectfinance' className="text-gray-900 hover:text-blue-600">Project Finance Loan</Link>
                </li>
                <li>
                  <Link to='/carrefinance' className="text-gray-900 hover:text-blue-600">Car Refinance Loan</Link>
                </li>
                <li>
                  <Link to='/others' className="text-gray-900 hover:text-blue-600">Other loans</Link>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-semibold text-green-400 tracking-widest text-lg mb-3">CONTACT</h2>
              <nav className="list-none mb-10 text-base font-normal">
                <li>
                  <Link to={`tel:${vb}`} className="text-gray-900 hover:text-blue-600">{vb}</Link>
                </li>
                <li>
                  <Link to={`tel:${vb}`} className="text-gray-900 hover:text-blue-600">{vb}</Link>
                </li>
                <li>
                  <Link to={`tel:${vb}`} className="text-gray-900 hover:text-blue-600">{vb}</Link>
                </li>
                <li>
                  <Link to={`tel:${vb}`} className="text-gray-900 hover:text-blue-600">{vb}</Link>
                </li>
              </nav>
            </div>

          </div>
        </div>
        <div className="bg-green-400">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-900 text-sm text-center sm:text-left">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-900">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-900">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-900">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-900">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;