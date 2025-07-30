
import { Users, Briefcase, BarChart, User } from 'lucide-react';

  const features = [
    {
      icon: <Briefcase className="text-white w-6 h-6" />,
      title: 'Efficiency & Management',
      desc: 'Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: <Users className="text-white w-6 h-6" />,
      title: 'Effective Team Work',
      desc: 'Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: <BarChart className="text-white w-6 h-6" />,
      title: 'Amazing Growth Flow',
      desc: 'Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
  ];
const PagethreeDelish = () => {
  
  return (
 
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        <div className="flex flex-col space-y-6">
          
          <span className="bg-[#CB3A1A] text-white text-xs font-semibold px-3 py-1  uppercase tracking-wider self-start">
            Make Reservation
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
            WHY DELISH YOUR PRIORITY
          </h1>

          <p className="mt-2 text-gray-600 text-start text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipiscing elit netus sagittis aenean malesuada, velit sodales hendrerit lacus iaculis porta lobortis sollicitudin quisque dictum porttitor donec...
          </p>

          <div className="mt-8 space-y-6">
       
            <div className="flex items-start space-x-4">
              <span className='w-[100px] h-[70px] rounded-full bg-[#CB3A1A]'><Briefcase className='m-6'/></span>
              <div className='text-start'>
                <h3 className="text-xl font-semibold text-gray-900">Efficiency & Management</h3>
                <p className="mt-1 text-gray-600">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className='w-[100px] h-[70px] rounded-full bg-[#CB3A1A]'><Users className='m-6'/></span>
              <div className='text-start'>
                <h3 className="text-xl font-semibold text-gray-900">Effective Team Work</h3>
                <p className="mt-1 text-gray-600">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className='w-[100px] h-[70px] rounded-full bg-[#CB3A1A]'><BarChart className='m-6'/></span>
              <div className='text-start'>
                <h3 className="text-xl  font-semibold text-gray-900">Amazing Growth Flow</h3>
                <p className="mt-1 text-gray-600">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className=" h-96 w-[400px] bg-[#D9D9D9]  shadow-md">
           
          </div>
        </div>
      </div>
    </div>
  

  )

}
export default PagethreeDelish