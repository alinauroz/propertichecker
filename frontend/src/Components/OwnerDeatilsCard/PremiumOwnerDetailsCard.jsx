import { placeholderImage, translate } from "@/utils";
import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {
  FiMail,
  FiMessageSquare,
  FiPhoneCall,
  FiThumbsUp,
} from "react-icons/fi";
import { MdReport } from "react-icons/md";
import { RiMailSendLine, RiThumbUpFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const PremiumOwnerDetailsCard = ({
  getPropData,
  showChat,
  interested,
  isReported,
  handleInterested,
  isMessagingSupported,
  handleNotInterested,
  notificationPermissionGranted,
  handleChat,
  userCurrentId,
  handleReportProperty,
}) => {
  
  const router = useRouter();

  const handleCheckPremium = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Opps!",
      text: " Private property ahead. Upgrade for premium access. Join now to explore exclusive features!",
      icon: "warning",
      allowOutsideClick: true,
      showCancelButton: false,
      customClass: {
        confirmButton: "Swal-confirm-buttons",
        cancelButton: "Swal-cancel-buttons",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/subscription-plan");
      }
    });
  };
  const handleNavigateSubScribe = (e) => {
    e.preventDefault();
    router.push("/subscription-plan");
  };
  return (
    <>
      <div>
        <div className="border border-blue-200 p-4 bg-[#ffff] rounded-lg mx-auto">
          <div className="text-center  text-[20px] font-[600] mb-4 text-gray-800">
            $ {getPropData && getPropData.price}
          </div>
          <div className="text-center flex justify-start propertyflex propertyflexMax items-center gap-2 text-sm text-[400] mb-10">
            <div>Own this from just </div>
            <div className=" font-[400] rounded-[8px] py-[10px] px-[12px] bg-[#F5F5F5] border-1 border-[#5C2289]  text-[#5C2289]">
              6,864 $/month
            </div>
          </div>

          <div className="grid grid-cols-3 w-full gap-2  mb-4">
            <button className="bg-[#5C2289] items-center justify-center w-full flex rounded-[8px] text-center gap-2 py-[10px] px-[12px] text-white">
              <Image
                src="/call 1.svg"
                alt="Call Icon"
                width={20}
                height={20}
                className=""
              />
              <div className="propertyHide propertyHideMax"> Call</div>
            </button>
            <button className="bg-[#5C2289] items-center justify-center w-full flex rounded-[8px] text-center gap-2 py-[10px] px-[12px] text-white">
              <Image
                src="/whatsapp 1.svg"
                alt="Call Icon"
                width={20}
                height={20}
                className=""
              />
              <div className="propertyHide propertyHideMax"> WhatsApp</div>
            </button>
            <button className="bg-[#5C2289] items-center justify-center w-full flex rounded-[8px] text-center gap-2 py-[10px] px-[12px] text-white">
              <Image
                src="/email 1.svg"
                alt="Call Icon"
                width={20}
                height={20}
                className=""
              />
              <div className="propertyHide propertyHideMax"> Email</div>
            </button>
          </div>

          <div className="flex items-center mb-4">
            <div className="mr-3">
              <Image
                src={getPropData && getPropData.profile}
                alt="Agent Image"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div>
              <div className="font-[500] text-black">
                {getPropData && getPropData.customer_name}
              </div>
              <div className="text-[14px] font-[400] text-gray-500">
                Usually responds within 5 minutes
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className=" font-[400] rounded-[8px] py-[10px] px-[12px] bg-[#F5F5F5] border-1 border-[#5C2289]  text-[#5C2289]">
              Save to shortlist
            </button>
          </div>
        </div>
      </div>
      <div className="flex  flex-col gap-y-3 my-4">
        <button onClick={handleReportProperty} className=" w-full text-white font-[400] flex justify-center rounded-[8px] py-[10px] px-[12px] items-center gap-2 bg-[#5C2289] border-1 border-[#5C2289]">
          {" "}
          <Image
            src={"/report 1.svg"}
            alt="Agent Image"
            width={30}
            height={30}
            className="rounded-full"
          />{" "}
          <div>Report this listing</div>
        </button>
        {
          interested || getPropData?.is_interested === 1 ? (
            <button onClick={handleNotInterested} className="w-full items-center gap-2 text-white font-[400] flex justify-center rounded-[8px] py-[10px] px-[12px] bg-[#5C2289] border-1 border-[#5C2289]">
              <Image
            src={"/iconamoon_like-light.svg"}
            alt="Agent Image"
            width={30}
            height={30}
            className="rounded-full"
          />{" "}
          <div>Interested</div>
            </button>
          ) :
        <button onClick={handleInterested} className="w-full items-center gap-2 text-white font-[400] flex justify-center rounded-[8px] py-[10px] px-[12px] bg-[#5C2289] border-1 border-[#5C2289]">
          {" "}
          <Image
            src={"/iconamoon_like-light.svg"}
            alt="Agent Image"
            width={30}
            height={30}
            className="rounded-full"
          />{" "}
          <div>Interest</div>
        </button>
        }
      </div>

      <div className="border-1 bg-[#FEFEFE] border-black rounded-lg p-6 ">
        <div className="text-center text-lg font-semibold mb-2 text-gray-800">
          Own this property from just
        </div>

        <div className="text-center text-2xl font-bold text-[#5C2289] mb-1">
          {getPropData && getPropData.price}{" "}
          <span className="text-base font-normal">$/month</span>
        </div>

        <div className="text-center text-sm text-gray-500 mb-6">
          Fixed rates from: <span className="font-semibold">3.89%</span>
        </div>

        <div className="text-center mb-6">
          <button className="px-6 py-3 border border-[#5C2289] text-[#5C2289] rounded-lg font-semibold hover:bg-[#5C2289] hover:text-white transition">
            Get pre-approved
          </button>
        </div>

        <div className="text-center text-xs text-gray-400 mb-2">
          In partnership with
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/propertLogo.svg"
            alt="Properti Checker Logo"
            width={100}
            height={30}
          />
        </div>
      </div>

      <div className="card" id="owner-deatils-card">
        {/* <div className="card-header" id="card-owner-header">
          <div>
            <Image
              loading="lazy"
              width={200}
              height={200}
              src={getPropData && getPropData.profile}
              onError={placeholderImage}
              className="owner-img"
              alt="no_img"
            />
          </div>

          <div className="owner-deatils">
            <span className="owner-name">
              {" "}
              {getPropData && getPropData.customer_name}
            </span>
            {getPropData && getPropData.email && (
              <span className="owner-add" onClick={handleCheckPremium}>
                {" "}
                <RiMailSendLine size={15} />
                {getPropData &&
                  `${getPropData.email.slice(0, 2)}${"*".repeat(getPropData.email.length - 2)}`}
              </span>
            )}
          </div>
        </div> */}
        {/* <div className="card-body">
          <div className="owner-contact">
            <div>
              <FiPhoneCall id="call-o" size={60} />
            </div>
            <div className="deatilss">
              <span className="o-d"> {translate("call")}</span>
              <span className="value" onClick={handleCheckPremium}>
                {getPropData &&
                  `${getPropData.mobile.slice(0, 4)}${"*".repeat(getPropData.mobile.length - 4)}`}
              </span>
            </div>
          </div>
          
          <div className="owner-contact">
            <div>
              <CiLocationOn id="mail-o" size={60} />
            </div>
            <div className="deatilss">
              <span className="o-d"> {translate("location")}</span>
              <span className="value" onClick={handleCheckPremium}>
                {getPropData &&
                  `${getPropData.client_address.slice(0, 2)}***********`}
              </span>
            </div>
          </div>
          {showChat &&
            isMessagingSupported &&
            notificationPermissionGranted && (
              <div className="owner-contact" onClick={handleCheckPremium}>
                <div>
                  <FiMessageSquare id="chat-o" size={60} />
                </div>
                <div className="deatilss">
                  <span className="o-d"> {translate("chat")}</span>
                  <p className="value"> {translate("startAChat")}</p>
                </div>
              </div>
            )}
          <div className="enquiry">
            {!isReported && userCurrentId !== getPropData?.added_by ? (
              <button
                className="enquiry-buttons"
                onClick={handleReportProperty}
              >
                {" "}
                <MdReport className="mx-1" size={20} />
                {translate("reportProp")}
              </button>
            ) : null}

            {interested || getPropData?.is_interested === 1 ? (
              <button className="enquiry-buttons" onClick={handleNotInterested}>
                <RiThumbUpFill className="mx-1" size={20} />
                {translate("intrested")}
              </button>
            ) : (
              <button className="enquiry-buttons" onClick={handleInterested}>
                <FiThumbsUp className="mx-1" size={20} />
                {translate("intrest")}
              </button>
            )}
          </div>

          <div className="is_premium_user">
            <span>{translate("SubscribetoAccess")}</span>
            <button onClick={handleNavigateSubScribe}>
              <span>{translate("subscribeNow")}</span>
              <span>
                <FaArrowRight size={20} />
              </span>
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PremiumOwnerDetailsCard;
