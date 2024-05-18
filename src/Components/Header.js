import React from 'react';
import img1 from '../images/logo.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';
import img6 from '../images/img6.png';
import img7 from '../images/img7.png';
import img8 from '../images/img8.png';
import img9 from '../images/img9.png';
import img10 from '../images/img10.png';
import img11 from '../images/img11.png';
import img12 from '../images/img12.png';
import img13 from '../images/img13.png';
import img14 from '../images/img14.png';
import logo1 from '../images/logo1.png';
// import MotionSpinner from './MotionSpinner';
const Header = () => {
  return (
    <div className='w-full h-screen relative'>
     <div className='bg-black h-[8vh] w-full flex justify-start items-center pl-4'>
    <img src={logo1} className='h-[60px]'/>
    <button className='bg-[#277006] px-4 py-2 text-white rounded  ml-[85vw]'>Buy Now</button>
</div>

      <div className='w-full h-[92vh] bg-[#070707] flex flex-col justify-center items-center'>
        <div className="w-full flex items-center justify-between px-4 sm:px-8 py-4">
          <img src={img1} className='mt-[-20vh] ml-[10%] h-[100vh] sm:h-auto max-w-[15%] sm:max-w-[10%]'/>
          <button className='px-4 sm:px-6 py-2 bg-white text-black rounded text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mr-[10%] mt-[-20vh]'>Purchase Now</button>
        </div>
        <div className='flex w-full items-center justify-center px-4 sm:px-8 ml-[1vw]'>
        <div className='mt-[-40vh] text-left text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl' style={{ background: 'linear-gradient(90deg, orange, blue, lightpink)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Transform </p>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl' style={{ background: 'linear-gradient(90deg, orange, blue, lightpink)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Your Website</p>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>With Motion Art</p>
            <p className='text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl'>Effect</p>
          </div>
          <div className='flex flex-col items-start text-center space-y-4 text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-4 sm:px-8 sm:ml-[10vw]'>
            <p className='flex items-start'>Attract Your</p> 
            <p className='flex items-start'> Visitors Attention</p> 
            <p className='flex items-start'>With Colourful </p> 
            <p className='flex items-start' style={{ background: 'linear-gradient(90deg, orange, blue, lightpink)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Motion Art Effect</p>
            <div className='text-gray-500 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl mt-4'>
             <p className='flex items-start'> Unleash the power of creativity with Motion Art for Elementor - your</p>
              <p className='flex items-start'>ultimate solution for seamlessly integrating captivating animations into</p> 
              <p className='flex items-start'>your website.</p>
          </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#070707] py-16 mt-[-10vh]'>
        <h2 className='text-center text-white text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-8'>
          Trusted by thousands of users around the world
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 ml-[100px]'>
          <div className='flex flex-row items-center mt-10 '>
            <img src={img2} className='h-6 sm:h-10 md:h-14 lg:h-18 xl:h-22 mr-4' />
            <div>
              <img src={img5} className='h-2 sm:h-3 md:h-3 lg:h-4 xl:h-5' />
              <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2'>4.5 Score, 9 Reviews</p>
            </div>
          </div>
          <div className='flex flex-row items-center mt-10 '>
            <img src={img3} className='h-6 sm:h-10 md:h-14 lg:h-18 xl:h-22 mr-4' />
            <div>
              <img src={img5} className='h-2 sm:h-3 md:h-3 lg:h-4 xl:h-5' />
              <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2'>4.5 Score, 9 Reviews</p>
            </div>
          </div>
          <div className='flex flex-row items-center mt-10 '>
            <img src={img4} className='h-6 sm:h-10 md:h-14 lg:h-18 xl:h-22 mr-4' />
            <div>
              <img src={img5} className='h-2 sm:h-3 md:h-3 lg:h-4 xl:h-5' />
              <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2'>4.5 Score, 9 Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#070707] py-16 flex flex-col sm:flex-row items-center justify-center '>
        <div className='flex flex-col items-start text-left px-4 sm:px-8 ml-[-5vw]'>
          <div className='text-white text-sm sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 space-y-5 '>
           <p className='flex items-start'>Turn Your Cursor Into A Colorful</p> 
         <p className='flex items-start'> Magic Wand & Charm Your Visitors</p>
          </div>
          <br/>
          <div className='text-gray-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xlmb-8'>
           <p className='flex items-start'> Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse</p>
            <p className='flex items-start'> your website with visually stunning motion art elements.</p>
          </div>
          <br/>
          <button className='bg-gradient-to-r from-orange-400 via-blue-400 to-pink-400 px-6 py-3 text-white rounded text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl flex items-center justify-center w-85 h-16'>
            Purchase From Envato
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        <div className='flex justify-center items-center mt-8 sm:mt-0 sm:ml-8'>
          <img src={img6} className='h-30 sm:h-45 md:h-60 lg:h-70 xl:h-82' />
        </div>
      </div>
      <div className='w-full bg-[#070707] py-16'>
        <p className='text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-12'>
          Apply On Any Section Or Enable <br />For Whole Page
        </p>
        <div className='flex flex-col sm:flex-row items-center justify-around px-4 sm:px-8 '>
          <div className='relative bg-[#0a0112]  text-white p-8 rounded-lg w-full sm:w-[45%] mb-8 sm:mb-0 h-[75vh]  border border-gray-900'>
           
            <div className='mt-0'>
              <p className='text-2xl flex items-start'>Apply On Section</p>
              <p className='text-gray-400 text-lg mt-2 flex items-start'>Apply on section is a game-changer, offering an unparalleled way to 
              </p>
              <p className='text-gray-400 text-lg mt-2 flex items-start'>manage applications directly from your website.</p>
              <img src={img13} className='m-3'/>
            </div>
        

            </div>
              
          <div className='relative bg-[#0a0112] text-white p-8 rounded-lg w-full sm:w-[45%] mt-8 sm:mt-[20vh] h-[80vh]  border border-gray-900'>
            <div className='mt-0'>
              <p className='text-2xl flex items-start'>Apply On Page</p>
              <p className='text-gray-400 text-lg mt-2 flex items-start '>
                Take your website to new heights with Motion Art for Elementor
                </p>
               <p className='text-gray-400 text-lg mt-2 flex items-start'> Embrace the power of motion and animation</p>
               <img src={img14} className='m-1'/>
                
            </div>
           
          </div>
            
          </div>
  
    
      <div className='bg-[#070707] m-20'>
      <div className='relative bg-[#0a0112] text-white p-8 rounded-3xl w-full sm:w-[95%] mb-8 sm:mb-0 m-10 ml-[3vw] border border-gray-900'>
                    <p className='text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8'>Supported by All Popular Browsers</p>
                    <p className='text-center text-gray-400 text-lg mb-8'>Rest assured, Motion Art is designed to be compatible <br/> with all major web browsers.</p>
                    <div className='flex justify-around'>
                        <div className='flex items-center'>
                            <img src={img7} className='h-4 sm:h-8 md:h-12 lg:h-16 xl:h-20' />
                            <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-4'>Firefox</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={img8} className='h-4 sm:h-8 md:h-12 lg:h-16 xl:h-20' />
                            <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-4'>Chrome</p>
                        </div>
                        <div className='flex items-center'>
                            <img src={img9} className='h-4 sm:h-8 md:h-12 lg:h-16 xl:h-20' />
                            <p className='text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ml-4'>Edge</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center h-full m-20'>
            <p className='text-white  text-center text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl mb-4'>
                An All-Round Plugin With <br/>Powerful Features
            </p>
            <p className='text-gray-400 text-sm sm:text-base text-center m-5'>
               <p className='flex items-start'>Whether you're a seasoned web designer or just starting out, Motion Art for </p> 
               <p className='flex items-start'> Elementor seamlessly integrates with the Elementor platform, providing you <br/>with a seamless and intuitive experience</p> 
               
            </p>
            </div>
              </div>
              <div className='flex flex-wrap justify-center items-center space-x-4 space-y-4'>
      <div className='relative bg-[#0a0112] p-8 rounded-2xl w-[30%] h-[350px] border border-gray-900 flex flex-col justify-between'>
        <img src={img10} className='h-[200px] w-[20%] object-cover rounded-lg mb-4' alt="Card 1" />
        <div>
          <p className='text-white text-2xl flex items-start'>Light Weight</p>
          <p className='text-gray-400 text-lg flex items-start'>Motion Art for Elementor is designed to be </p>
          <p className='text-gray-400 text-lg flex items-start'>lightweight.</p>
        </div>
      </div>
      <div className='relative bg-[#0a0112] p-8 rounded-2xl w-[30%] h-[350px] border border-gray-900 flex flex-col justify-between'>
        <img src={img11} className='h-[250px] w-[25%] object-cover rounded-lg mb-4' alt="Card 2" />
        <div>
          <p className='text-white text-2xl flex items-start'>100% Responsive</p>
          <p className='text-gray-400 text-lg flex items-start'>Create a consistent visual experience </p>
          <p className='text-gray-400 text-lg flex items-start'>across all devices.</p>
        </div>
      </div>
      <div className='relative bg-[#0a0112] p-8 rounded-2xl w-[30%] h-[350px] border border-gray-900 flex flex-col justify-between'>
        <img src={img12} className='h-[300px] w-[30%] object-cover rounded-lg mb-4' alt="Card 3" />
        <div>
          <p className='text-white text-2xl flex items-start'>User Friendly Interface</p>
          <p className='text-gray-400 text-lg flex items-start'>Ensure a smooth experience for both</p>
          <p className='text-gray-400 text-lg flex items-start'>applicants and administrators.</p>
        </div>
      </div>
    </div>
    
            </div>
      
            <div className="bg-gradient-to-r from-orange-400 via-blue-400 to-pink-400 py-4 flex justify-between items-center text-white">
      <div className="ml-16">
        <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
      </div>
      <div className="mr-6">
        <span className='flex items-start space-x-3 mr-16'>
        <p>Documentation</p>
        <p>Support</p>
        </span>
      </div>
    </div>
    {/* <MotionSpinner/> */}
      
            </div>
            
  );
};

export default Header;