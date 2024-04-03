import { logoutSuccess } from "@/store/reducer/authSlice";
import { translate } from "@/utils";
import FirebaseData from "@/utils/Firebase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for mobile menu toggle
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const HeaderHome2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.User_signup?.data?.token);
  const { signOut } = FirebaseData();
  const router = useRouter();

  const handleLogout = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        customClass: {
            confirmButton: 'Swal-confirm-buttons',
            cancelButton: "Swal-cancel-buttons"
        },
        confirmButtonText: "Yes",
    }).then((result) => {
        if (result.isConfirmed) {
            logoutSuccess();
            toast.success(translate("logoutSuccess"));
            // Clear the recaptchaVerifier by setting it to null
            // window.recaptchaVerifier = null;
            router.push("/");
        } else {
            toast.error(translate("logoutcancel"));
        }
    });
};
  
  const navLinks = !isLoggedIn ? [
    { href: '/home-2', label: 'Home' },
    { href: '#', label: 'Buy' },
    { href: '#', label: 'Rent' },
    { href: '#', label: 'Projects' },
    { href: '#', label: 'AirBnB' },
    { href: '#', label: 'Residential' },
    { href: '#', label: 'Commercials' },
    { href: '/articles', label: 'Blog' },
    { href: '#', label: 'Agents' },
    { href: '#', label: 'Contact Us' },
  ] : [
    { href: '/home-2', label: 'Home' },
    { href: '/user/dashboard', label: 'Dashboard' },
    { href: '#', label: 'Projects' },
    { href: '#', label: 'AirBnB' },
    { href: '#', label: 'Residential' },
    { href: '#', label: 'Commercials' },
    { href: '/articles', label: 'Blog' },
    { href: '#', label: 'Agents' },
    { href: '#', label: 'Contact Us' },
  ];

  return (
    <header className={"max-w-[1280px] mx-auto "}>
      <div className={"flex justify-between items-center py-4 px-6 md:px-1 lg:px-6  bg-[#f4f5f4] " + (isMenuOpen ? 'fixed z-50 w-full' : '')}>
        
        <div className="flex items-center md:w-[100px] lg:w-[124px]">
          <Link href="/">
          <Image src="/logoHome2.svg" alt="Logo" width={124} height={40} />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-[#5C2289]">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className="hidden md:flex md:space-x-4 ">
          {navLinks.map((link,index) => (
            <Link key={link.href} href={link.href} className={`text-[#000000]  text-[14px] hover:text-[#5C2289]  ${
                (index === 2 || index === 4 || index===6) ? ' md:hidden lg:block' : ''
              }`}>
              {link.label}
            </Link>
          ))}
        </nav>
        {
          isLoggedIn ? 
          <div className="hidden md:flex space-x-4 justify-center items-center">
            <button className="text-[#5C2289] py-2 rounded-[4px]" onClick={handleLogout}>
                  Log Out
                </button>
          <Link href="/user/properties">
            <button className="text-[#5C2289]  py-2  rounded-[4px]">
              Add Property
            </button>
          </Link>
          <Link href="/user/dashboard">
          <button className="bg-purple-600 text-white px-4  py-2  rounded-[4px] hover:bg-[#5C2289]">
              My Account
            </button>
          </Link>
          </div>
          :
        <>
        <div className="hidden md:flex space-x-4 justify-center items-center">
          <Link href="/login" className="text-[#000000] text-[16px] font-[500] hover:text-[#5C2289]">
            Login
          </Link>
          <Link href="/register">
            <button className="bg-purple-600 text-white px-4  py-2  rounded-[4px] hover:bg-[#5C2289]">
              Register
            </button>
          </Link>
        </div>
        </>
        }
      </div>

   
      {isMenuOpen && (
        <nav className="md:hidden fixed left-0 z-[999] bg-[#f4f5f4] px-6 top-[75px] h-[calc(100vh-70px)] w-full mx-auto flex flex-col items-start space-y-4 py-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-[#000000] hover:text-[#5C2289]">
              {link.label}
            </Link>
          ))}
          {isLoggedIn ? (
            <div className="flex space-x-4 justify-center items-center">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-[4px] hover:bg-[#5C2289]" onClick={handleLogout}>
                  Log Out
                </button>
              <Link href="/user/properties">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-[4px] hover:bg-[#5C2289]">
                  Add Property
                </button>
              </Link>
              <Link href="/user/dashboard">
                <button className="bg-purple-600 text-white px-4 py-2 rounded-[4px] hover:bg-[#5C2289]">
                  My Account
                </button>
              </Link>
            </div>
          ) :
          <div className="flex space-x-4 justify-between items-center">
            <Link href="/login" className="text-[#000000] text-[16px] font-[500] hover:text-[#5C2289]">
              Login
            </Link>
            <Link href="/register">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-[4px] hover:bg-[#5C2289]">
                Register
              </button>
            </Link>
          </div>
          }
        </nav>
      )}
    </header>
  );
};

export default HeaderHome2;
