import Image from 'next/image';

const ContactBar = () => {
  return (
    <div className="flex items-center justify-between bg-white w-full p-3 rounded-b-[12px] shadow-md space-x-4">
      <div className="flex items-center space-x-3">
        <Image
          src="/profileImg.svg"
          alt="Profile Picture"
          width={40}
          height={40}
        
          className="rounded-full w-[30px] sm:w-[40px] sm:h-[40px]  h-[30px]"
        />
        <div>
          <div className="flex items-center space-x-1">
            <span className="font-[500] text-[14px] text-[#000000] min-w-max">Habib Alam</span>
            <Image
              src="/bag.svg"
              alt="Verified Icon"
              width={16}
              height={16}
              className='hidden sm:block'
            />
          </div>
          <span className="text-[#BBBBBB] text-[12px]">Sehgals</span>
        </div>
      </div>
      <div className="h-10 w-px bg-[#BBBB]"></div>
      
        <div className="flex bg-[#F5F5F5] rounded-[8px] py-[10px] px-[4px] items-center space-x-2">
          <Image
            src="/callIcon.svg"
            alt="Call Icon"
            width={20}
            height={20}
            className=''
          />
          <span className=" hidden sm:block list-style">Call</span>
        </div>
        <div className="flex items-center space-x-2 bg-[#F5F5F5] rounded-[8px] py-[10px] px-[4px]">
          <Image
            src="/whatsappIcon.svg"
            alt="WhatsApp Icon"
            width={20}
            height={20}
            className=''
          />
          <span className="list-style hidden sm:block">WhatsApp</span>
        </div>
        <div className="flex items-center space-x-2 bg-[#F5F5F5] rounded-[8px] py-[10px] px-[4px]">
          <Image
            src="/instaIcon.svg"
            alt="Telegram Icon"
            width={20}
            height={20}
            className=''
          />
          <span className="list-style hidden sm:block">Telegram</span>
        </div>
        <div className="flex items-center space-x-2 bg-[#F5F5F5] rounded-[8px] py-[10px] px-[4px]">
          <Image
            src="/mailIcon.svg"
            alt="Email Icon"
            width={20}
            height={20}
            className=''
          />
          <span className="list-style hidden sm:block">Email</span>
        </div>
        <div className="flex items-center space-x-2 bg-[#F5F5F5] rounded-[8px] py-[10px] px-[4px]">
          <Image
            src="/dot.svg"
            alt="Menu Icon"
            width={20}
            height={20}
          />
        </div>
     
    </div>
  );
};

export default ContactBar;
