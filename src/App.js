

import Footer from './components/footer.component';
import NavHero from './components/navhero.component';
import Table from './components/table.component';
import './App.css';
import { useEffect, useState } from 'react';
import Cardlist from './components/cardlist.component';
import { Route, Routes } from 'react-router-dom';
import Refresh from './components/refresh.component';
import Navbar from './components/navbar.component';

import Contactus from './components/contactus.component';




const Home = (props) => {
  const googleMapsLink = 'https://goo.gl/maps/uvzST7AKTmStA4bf9';

  



  return (
    <div className='bg-white'>


      <Navbar />

      <NavHero />
      
      <Cardlist info={props.info} />

      <Footer />


    </div>



  );

}




function App() {

  const information = [

    {
      loan: 'Home Loan',
      about: "At Shree Ganesh Counsultancy, we understand that a home is not just a place to stay. It is much more than that. It is a warm little corner of the world that is yours, tailored to your tastes and needs. It is the place where you celebrate the joys, deal with the sorrows and enjoy the journey called life. There is no place like home and with SGC Home Loans you can gather hopes, achieve your dreams and create",
      min_rate: '8',
      max_rate: '11',
    },

    {
      loan: 'Mortgage Loan',
      about: "At Shree Ganesh Consultancy, we recognize that your home or property is more than just a dwelling. It's your sanctuary, your haven of comfort, and a reflection of your aspirations. With our Mortgage Loan solutions, we are committed to turning your homeownership dreams into reality. Whether you're a first-time buyer or seeking to refinance, our tailored Mortgage Loans provide you with the financial foundation to secure your slice of paradise, a place where cherished memories are woven into the very walls.",
      min_rate: '9',
      max_rate: '12',
    },

    {
      loan: 'Commercial Loan',
      about: "Shree Ganesh Consultancy understands that the world of business is built on opportunities, and your enterprise deserves a space that aligns with its ambitions. Our Commercial Loan offerings are designed to empower your business's growth journey. With our support, you can acquire the perfect commercial property, expand your operations, or invest in real estate ventures that shape your future. Just as a home nurtures personal dreams, our Commercial Loans nurture your business aspirations.",
      min_rate: '10',
      max_rate: '12',
    },

    {
      loan: 'Buisness Loan',
      about: "Businesses thrive when they have the right resources. At Shree Ganesh Consultancy, we comprehend the significance of fueling your entrepreneurial spirit. Our Business Loan solutions are tailored to provide the financial impetus your business needs. Whether it's expanding operations, optimizing processes, or seizing new opportunities, our Business Loans are the foundation upon which you can build success stories and transform your vision into reality.",
      min_rate: '12',
      max_rate: '18',
    },

    {
      loan: 'Personal Loan',
      about: "Life's journey is marked by myriad milestones, each carrying its own set of dreams and aspirations. Shree Ganesh Consultancy acknowledges the significance of personal aspirations, which is why we offer Personal Loans that bridge the gap between your dreams and reality. Be it an exotic vacation, a fairytale wedding, or unexpected medical expenses, our Personal Loans provide the means to embrace life's special moments without compromise.",
      min_rate: '14',
      max_rate: '22',
    },

    {
      loan: 'Project Finance Loan',
      about: "Projects are the cornerstones of progress, and Shree Ganesh Consultancy is dedicated to supporting your endeavors. Our Project Finance Loans provide the financial scaffolding necessary to transform ambitious projects into successful realities. Whether it's infrastructure, energy, or real estate, our tailored solutions are designed to fuel progress, foster innovation, and leave a lasting impact on the landscape of tomorrow.",
      min_rate: '10',
      max_rate: '12',
    },

    {
      loan: 'Car Loan',
      about: "Embark on journeys with the wind in your hair and the open road ahead, as Shree Ganesh Consultancy presents Car Loans that drive your desires. Your dream car is not just a vehicle; it's a statement of your style and ambition. With our Car Loans, you can effortlessly traverse the path to ownership, turning every drive into an unforgettable experience.",
      min_rate: '8',
      max_rate: '11',
    },

    {
      loan: 'Commercial Vehicle Loan',
      about: "In the realm of business, vehicles are the arteries that keep operations flowing. Shree Ganesh Consultancy recognizes the vital role commercial vehicles play in your enterprise. Our Commercial Vehicle Loans provide the financial gears your business needs to stay in motion. Whether it's trucks, vans, or specialized vehicles, our tailored solutions drive your business forward.",
      min_rate: 'x',
      max_rate: 'y',
    },

    {
      loan: 'Car Refinance Loan',
      about: "Discover a smoother financial ride with Shree Ganesh Consultancy's Car Refinance Loan. Just as your car embodies your journey, our tailored solution empowers you to optimize your auto loan. Whether you're looking to reduce payments, secure better interest rates, or customize your loan terms, our Car Refinance Loan puts you back in control. Your car's story continues, and with our support, you can steer towards greater savings and a more secure financial future. Drive with confidence as you redefine your car's role in your ongoing success story.",
      min_rate: '14',
      max_rate: '22',
    },

    {
      loan: 'Working Capital (Cash Credit/Overdraft)',
      about: "Smooth business operations require a steady flow of funds, and Shree Ganesh Consultancy understands the pulse of your enterprise. Our Working Capital solutions, including Cash Credit and Overdraft, provide the financial flexibility to meet your daily operational needs. With our support, you can keep your business engine running, seize opportunities, and navigate the dynamic currents of the market.",
      min_rate: '10',
      max_rate: '12',
    },







  ];




















  return (









    <div className='bg-gray-50'>


      <Routes>

        <Route >
          <Route index element={<Home info={information} />} />
          <Route path='homeloan' element={<Table info={information[0]} />} />
          <Route path='mortgageloan' element={<Table info={information[1]} />} />
          <Route path='commercialloan' element={<Table info={information[2]} />} />
          <Route path='buisnessloan' element={<Table info={information[3]} />} />
          <Route path='personalloan' element={<Table info={information[4]} />} />
          <Route path='projectfinance' element={<Table info={information[5]} />} />
          <Route path='carloan' element={<Table info={information[6]} />} />
          <Route path='commercialvehicleloan' element={<Table info={information[7]} />} />
          <Route path='carrefinance' element={<Table info={information[8]} />} />
          <Route path='workingcapital' element={<Table info={information[9]} />} />
        </Route>

      </Routes>




    </div>







    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
