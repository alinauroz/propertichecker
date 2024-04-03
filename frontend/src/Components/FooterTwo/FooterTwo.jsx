import Image from "next/image";
import Link from "next/link";

const FooterTwo = () => {
  return (
    <footer className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-y-8 flex-col md:flex-row justify-between items-center  border-gray-200 pt-6">
          <div className="flex items-center flex-col gap-y-5 space-x-4">
            <Image
              src="/footerLogo.svg"
              alt="Properti Checker"
              width={150}
              height={40}
            />
            <div className="flex space-x-4">
              <Link href="#">
                <Image
                  src="/linkedin 1.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/facebook 1.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#">
                <Image
                  src="/instagram-fill 1.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="#" target="_blank">
                <Image
                  src="/flowbite_x-solid.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          <div className="">
            <h3 className="text-[#000000] text-[20px] font-semibold">
              Properti Checker
            </h3>
            <div className="mt-2 flex flex-col space-y-1">
              <Link
                href="/about-us"
                className="text-[#000000] text-[20px] font-[400]"
              >
                About us
              </Link>

              <Link
                href="/contact-us"
                className="text-[#000000] text-[20px] font-[400]"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="text-start flex flex-col ">
            <h3 className="text-start text-[#000000] text-[20px] font-semibold">
              For Brokers
            </h3>
            <div className="mt-2 flex flex-col space-y-1 list-none">
              <Link
                href="/agent-hub"
                className="text-[#000000] text-[20px] font-[400]"
              >
                Agent Hub
              </Link>

              <Link
                href="/pc-insights"
                className="text-[#000000] text-[20px] font-[400]"
              >
                PC Insights
              </Link>
            </div>
          </div>

          <div className="mt-6 md:mt-0 flex flex-col items-center ">
            <div className="flex items-center border-[2px] rounded-[16px] px-4 py-2 border-[#000000] space-x-2">
              <Image
                src="/flag.svg" // Replace with your flag icon path
                alt="English"
                width={20}
                height={20}
              />
              <button className="text-gray-800 font-semibold">EN</button>
              <Image
                src="/downAngle.svg" // Replace with your flag icon path
                alt="English"
                width={20}
                height={20}
              />
            </div>
            <ul className="mt-4 space-y-1">
              <li>
                <Link
                  href="#"
                  className="text-[#000000] text-[20px] font-[400]"
                >
                  Terms & conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#000000] text-[20px] font-[400]"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#000000] text-[20px] font-[400]"
                >
                  Cookies policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500">
          Copyright 2020-2023 © PropertiChecker.com All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
