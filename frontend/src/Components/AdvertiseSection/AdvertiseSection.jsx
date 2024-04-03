import AreaConverterModal from './AreaConverterModal';
import { useState } from 'react';
const AdvertiseSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModalClose = () => {
    setIsModalOpen(!isModalOpen);
  };
    return (
      <div className="bg-[#5C2289] px-4 py-4 text-white">
        <div className='md:flex text-center md:text-start justify-between items-center max-w-[1280px] mx-auto'>
        <div className="text-[20px] font-[400]">
          Looking to advertise a property? We can help.
        </div>
        <div className="flex gap-y-2 flex-col sm:flex-row sm:space-x-4 text-center justify-center">
          <button className="border text-[20px] font-[400] border-white text-white px-4 py-2 rounded-[8px] ">
            List your property with us
          </button>
          <div className='relative'>
          <button onClick={toggleModalClose} className="border text-[24px] border-white text-white px-4 py-2 rounded-[8px] font-[500] ">
            Area converter
          </button>
          {isModalOpen && <AreaConverterModal toggleModalClose={toggleModalClose }/>}
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default AdvertiseSection;
  