import Basreng from '../assets/Basreng.png'
import Tot from '../assets/Tot.png'
import Hris from '../assets/Hris.png'
import Webelite from '../assets/Webelite.png'
import Kas from '../assets/Kas.png'
import Supercar from '../assets/Supercar.png'
import Cards from './Cards'


const Projects = () => {
    const projectJson = [
        {
          title: 'Basreng Umkm',
          desc: 'Webelite Builders created an exceptional website for our Basreng UMKM. Their professionalism, creativity, and dedication exceeded our expectations. Highly recommended for any business!',
          image: Basreng,
          live: "https://mohzhal.github.io/Basreng_KWDW/",
          github: "https://github.com/Mohzhal/Basreng_KWDW"
        },
        {
          title: 'Clone Gemini',
          desc: 'The team at Webelite Builders exceeded our expectations by seamlessly integrating Gemini into our digital marketing strategy. Their expertise and dedication were unparalleled. Highly recommend!',
          image: Tot,
          live: "https://tot-ai-iota.vercel.app",
          github: "https://github.com/Mohzhal/TOT_ai"
        },
        {
          title: 'Sistem Kas Masjid',
          desc: 'Webelite Builders provided an exceptional service, creating a user-friendly and efficient system that perfectly fits our needs. Highly recommended!',
          image: Kas,
          github: "https://github.com/Mohzhal/kas_Masjid"
        },
        {
          title: 'Manajemen Karyawan',
          desc: 'Webelite Builders delivered an outstanding solution for our employee management system, combining efficiency with a sleek, modern design.',
          image: Hris,
          live: "#",
          github: "#"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
