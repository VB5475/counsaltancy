import Card from "./card.component";
import Partners from "./partners.component";



const Cardlist = (props) => {

  const images = [

    {
      link: '/homeloan',
      src: 'https://i.ibb.co/XxYZCnR/homeloan.jpg',

    },

    {
      link: '/mortgageloan',
      src: 'https://i.ibb.co/cJ5hgMC/8840678.jpg',

    },
    {
      link: '/commercialloan',
      src: 'https://i.ibb.co/WGsv1jq/commercial.jpg',

    },
    {
      link: '/buisnessloan',
      src: 'https://i.ibb.co/sg2JfgP/buisnessloan.jpg',

    },
    {
      link: '/personalloan',
      src: 'https://i.ibb.co/y0n4CvP/personal-loan.jpg',

    },
    {
      link: '/projectfinance',
      src: 'https://i.ibb.co/Vq3TX6X/projject.jpg',

    },
    {
      link: '/carloan',
      src: 'https://i.ibb.co/WB4nCDb/carefinance.jpg',

    },
    {
      link: '/commercialvehicleloan',
      src: 'https://i.ibb.co/LZrfXDS/commercialvehicle.jpg',

    },
    {
      link: '/carrefinance',
      src: 'https://i.ibb.co/WB4nCDb/carefinance.jpg',

    },
    {
      link: '/workingcapital',
      src: 'https://i.ibb.co/CWTtB7x/workcapital.jpg',

    },
    {
      link: '/insuarrances',
      src: 'https://i.ibb.co/2PBWty1/insuarance.jpg',

    },
    {
      link: '/others',
      src: 'https://i.ibb.co/N9J9SNt/others.jpg',

    },


  ]


  return (
    <>
    
      <section id="products" className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-10 text-gray-900 border-b-4 pb-2 border-green-400">Our Products</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">At Shree Ganesh Consultancy, we excel in delivering expert-level counseling across various segments. Our commitment to excellence ensures that we provide unparalleled guidance and insights in areas such as... </p>

          </div>



          <div className="gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid flex flex-wrap -m-2">
            <Card info={props.info[0]} image={images[0]} />
            <Card info={props.info[1]} image={images[1]} />
            <Card info={props.info[2]} image={images[2]} />
            <Card info={props.info[3]} image={images[3]} />
            <Card info={props.info[4]} image={images[4]} />
            <Card info={props.info[5]} image={images[5]} />
            <Card info={props.info[6]} image={images[6]} />
            <Card info={props.info[7]} image={images[7]} />
            <Card info={props.info[8]} image={images[8]} />
            <Card info={props.info[9]} image={images[9]} />
            <Card info={props.info[0]} image={images[10]} />
            <Card info={props.info[0]} image={images[11]} />

          </div>

        </div>
      </section>

      <Partners  />


      {/* <!-- team --> */}
      <div id="coreteam" className=" py-24  ">
        <div className="container mx-auto px-6 md:px-12 xl:px-32">
          <div className="flex flex-col text-center w-full mb-20">
            <h1  className="sm:text-4xl text-3xl font-medium title-font mb-10 text-gray-900 border-b-4 pb-2 border-green-400">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">Introducing Shree Ganesh Consultancy's adept financial consultants, adeptly designing tailored loan solutions across diverse sectors to ensure your goals are achieved with professionalism</p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-2">
            <div className="space-y-4 text-center">
              <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://i.ibb.co/fv2S8Pk/photo-2023-08-18-12-40-39.jpg" alt="woman" loading="lazy" width="640" height="805" />
              <div>
                <h4 className="text-2xl">Rushi Bhatti</h4>
                <span className="block text-sm text-gray-500">Post</span>
              </div>
            </div>
            {/* <div className="space-y-4 text-center">
              <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80"
                src="https://i.ibb.co/fv2S8Pk/photo-2023-08-18-12-40-39.jpg" alt="man" loading="lazy" width="1000" height="667" />
              <div>
                <h4 className="text-2xl">Jonathan Doe</h4>
                <span className="block text-sm text-gray-500">Chief Technical Officer</span>
              </div>
            </div> */}
            <div className="space-y-4 text-center">
              <img className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="https://i.ibb.co/fv2S8Pk/photo-2023-08-18-12-40-39.jpg" alt="woman" loading="lazy" width="1000" height="667" />
              <div>
                <h4 className="text-2xl">Digubha</h4>
                <span className="block text-sm text-gray-500">Post</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/SnNrNcS/vb-photo-final.jpg" alt="vb-photo-final" border="0"></a> */}
      {/* <a href="https://ibb.co/bJP3H8s"><img src="https://i.ibb.co/fv2S8Pk/photo-2023-08-18-12-40-39.jpg" alt="photo-2023-08-18-12-40-39" border="0"></a> */}

      {/* <a href="https://ibb.co/bRXjx79"><img src="https://i.ibb.co/YTh46bs/pexels-aarti-vijay-2900315.jpg" alt="pexels-aarti-vijay-2900315" border="0"></a> */}
      {/* <a href="https://ibb.co/M7P3ZwH"><img src="https://i.ibb.co/VTMPJnG/Pexels-aarti-vijay-2900315.jpg" alt="Pexels-aarti-vijay-2900315" border="0"></a> */}


    </>

  );





};

export default Cardlist;