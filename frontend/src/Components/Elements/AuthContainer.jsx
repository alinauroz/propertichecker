import Image from "next/image";
import coverImage from "../../assets/auth-cover.jpeg";
import logo from "../../assets/logo-full.svg";
import appQr from "../../assets/app-qr.png";
import Button from "./Button";


function AuthContainer({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div
        className="bg-cover bg-center HddenS"
        style={{ backgroundImage: `url(${coverImage.src})` }}
      >
        <div className="bg-[#ffffffcc] h-full flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-main">Welcome!</h1>
            <Image
              src={logo}
              alt="logo"
              width={200}
              height={200}
              className="mt-12 mb-0"
            />

            <Image
              src={appQr}
              alt="logo"
              width={280}
              height={280}
              className="my-4"
            />

            <div className="flex gap-4 items-center">
              <Button className="w-[250px]">
                <Image
                  src="/apple.svg"
                  alt="apple"
                  width={21}
                  height={26}
                  className="mr-2"
                />
                Download on iOS
              </Button>
              <Button className="w-[250px]">
              <Image
                  src="/android 1.svg"
                  alt="apple"
                  width={21}
                  height={26}
                  className="mr-2"
                />
                Download on Android</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ECECEC] flex items-center p-8">
        <div className="md:w-[70%] MaxWith1 max-w-[500px] mx-auto">{children}</div>
      </div>
    </div>
  );
}

export default AuthContainer;
