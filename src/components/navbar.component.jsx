import { Link } from "react-router-dom";
import Contactus from "./contactus.component";
const Navbar = () => {



return(


<header class="text-gray-600 body-font bg-gray-100 border-2 ">
  <div class="container mx-auto flex flex-wrap   flex-col md:flex-row items-center  ">
  <div class="flex  flex-col md:flex-row md:items-center text-gray-900  w-1/5 h-auto ">
    <img src="https://brainheaterspublicbucket.s3.ap-south-1.amazonaws.com/studyroom/1692990638_SGC_Logo-03-fotor-bg-remover-20230825234526.png" alt="Your Image" class="w-3/4 h-1/2 text-white p-2 "/>
</div>

    <nav class="md:ml-60 md:mr-auto flex flex-wrap items-center  justify-center font-medium text-lg ">
    <Link
    to='/'
    
    class="block py-2 px-4  rounded hover:bg-gray-100 md:hover:bg-transparent text-green-400 md:hover:text-gray-900    border-2 border-gray-100 hover:border-green-400">Home</Link>
    <a 
    href="#products"
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector("#products");
      target.scrollIntoView({ behavior: "smooth" });
    }}
    
    
    class="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400    border-2 border-gray-100 hover:border-green-400">Products</a>
    <a 
    href="#partners"
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector("#partners");
      target.scrollIntoView({ behavior: "smooth" });
    }}
    
    
    class="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400    border-2 border-gray-100 hover:border-green-400">Partners</a>
    <a 
    href="#coreteam"
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector("#coreteam");
      target.scrollIntoView({ behavior: "smooth" });
    }}
    
  
    class="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400    border-2 border-gray-100 hover:border-green-400">Core Team</a>
    <a 
    href="#help"
    onClick={(e) => {
      e.preventDefault();
      const target = document.querySelector("#help");
      target.scrollIntoView({ behavior: "smooth" });
    }}
    
    
    class="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-400    border-2 border-gray-100 hover:border-green-400">Help</a>
 
    </nav>

{/* <button class="border font-medium transition duration-300 ease-in-out hover:scale-y-110 hover:scale-x-105  bg-white tracking-wide text-gray-800 text-lg rounded-lg border-b-2 border-gray-100 hover:border-gray-100 hover:bg-green-400 hover:text-white shadow-md   inline-flex items-center  py-1 px-3  mt-4 md:mt-0">Contact Us
     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
<Contactus/>

   
  </div>
</header>


); 


}

export default Navbar


