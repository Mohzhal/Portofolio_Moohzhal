import React from 'react'
import hero from '../assets/Hero.png'
import zal from '../assets/Zal.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind Css.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Muhammad  <span className='text-emerald-500'>Rizal</span></h1>
               <p className='md:text-2xl text-xl mb-4'>Ui/Ux Designer & Frontend</p>
               <p className='mb-4'>I am an undergraduate student majoring in Informatics Engineering at STTI Sony Sugema. I specialize in UI/UX design and frontend development, with a passion for creating intuitive and visually appealing interfaces. I enjoy bringing ideas to life through modern web technologies and crafting user-centered solutions that address real-world challenges.</p>
               <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="#link_Drive_cv" download target='_blank'>Download CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={zal} alt="" className='lg:h-[90vh] h-96  rounded-full'  />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-36 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full '> 
        <img src={facebook} alt="" className='w-20 '/>
        <img src={instagram} alt="" className='w-20'/>
        <img src={twitter} alt="" className='w-20'/>
        <img src={linkedin} alt="" className='w-20'/>
      </div>
    </section>
  )
}

export default Hero
