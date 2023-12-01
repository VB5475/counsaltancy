import { Link } from "react-router-dom";



const Card = (props) => {

console.log(props.link);
return(
    // <!-- component -->

<>


<Link to={props.image.link}>

<button className=" w-full  border transition duration-300 ease-in-out hover:scale-y-110 hover:scale-x-105  bg-white tracking-wide text-gray-800 font-bold rounded-xl border-b-2 border-white hover:border-white hover:bg-green-400 hover:text-white shadow-md lg:w-full md:w-full sm:w-full sm:text-ellipsis">
<div className="h-full flex items-center  p-4 ">
      
                 <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={props.image.src}/>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{props.info.loan}</h2>
            {/* <p className="text-gray-500">Product Manager</p> */}
          </div>
          </div>  
      </button>  

</Link>
  </>
        
);






}


export default Card;