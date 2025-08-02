import servicebg from '../assets/servicebg.png';
import leaf from '../assets/serviceleaf.png';
import veg from '../assets/servicevegimg.png';

const services = [
  {
    title: 'WEDDING SERVICE',
    img: servicebg,
    desc: 'The chocolate fondant which did not disappoint! It was rich and indulgent, with a gooey center that was pure bliss.',
    btn: 'READ MORE',
  },
  {
    title: 'BUFFET SERVICE',
    img: servicebg,
    desc: 'Assertively myocardinate robust e-tailers for extensible human capital. Appropriately benchmark networks.',
    btn: 'READ MORE',
  },
  {
    title: 'PARTY SERVICE',
    img: servicebg,
    desc: 'Assertively myocardinate robust e-tailers for extensible human capital. Appropriately benchmark networks.',
    btn: 'READ MORE',
  },
];

const ServiceSection = () => {
  return (
    <section className="relative bg-[#FAF4EE] py-16 px-4 md:px-8 lg:px-20 overflow-hidden">
     
      <img src={veg} alt="Veg" className="absolute hidden lg:block left-4 bottom-2 lg:left-20 lg:bottom-8 w-16 h-16 lg:w-32 lg:h-32 object-contain z-10" />
      <img src={leaf} alt="leaf" className="absolute hidden lg:block right-4 top-2 lg:right-20 lg:top-16 w-12 h-12 lg:w-24 lg:h-24 2xl:w-[225px] 2xl:h-[190px] object-contain" />
      <div className="text-center mb-10">
        <button className="bg-[#CB3A1A] text-white px-4 py-1 rounded text-xs font-semibold mb-4">OUR SERVICES</button>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-[#222]">OUR RESTAURANT SERVICE</h2>
        <div className="flex flex-col items-center gap-2">
          <span className="w-1 h-6 border-l border-[#CB3A1A] mb-1"></span>
          <span className="flex gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
            <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
            <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
            <span className="w-2 h-2 rounded-full bg-[#CB3A1A]"></span>
          </span>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row gap-8  items-stretch justify-center lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl max-w-6xl mx-auto lg:grid lg:grid-cols-2 2xl:grid-cols-3">
        {services.map((service, idx) => (
          <div key={idx} className="bg-white  shadow-md flex-1 flex flex-col items-start p-6 mb-8 lg:mb-0">
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover  mb-6 bg-gray-200" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-[#222] text-center">{service.title}</h3>
            <p className="text-gray-700 text-sm mb-6 ">{service.desc}</p>
            <button className="border border-[#CB3A1A] text-[#CB3A1A] px-4 py-2  text-xs font-semibold flex items-center gap-2 hover:bg-[#CB3A1A] hover:text-white transition-all">
              {service.btn} <span>&rarr;</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;