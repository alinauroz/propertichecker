import { useState } from "react";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import Modal from "../Elements/Modal";
const conversionFactors = {
  "Square Feet": 1,
  "Square Meters": 0.092903,
  "Acres": 0.0000229568,
};

const AreaConverterModal = ({ toggleModalClose }) => {
  const [fromValue, setFromValue] = useState("");  
  const [fromUnit, setFromUnit] = useState("Square Feet");  
  const [toUnit, setToUnit] = useState("Square Feet"); 
  const [convertedValue, setConvertedValue] = useState(null); 

  const handleConvert = () => {
    const fromValueNumber = parseFloat(fromValue); 

    if (isNaN(fromValueNumber)) {
      alert("Please enter a valid number.");
      return;
    }

    const valueInSquareFeet = fromValueNumber * conversionFactors[fromUnit];

    const converted = valueInSquareFeet / conversionFactors[toUnit];
    
    setConvertedValue(converted.toFixed(4)); 
  };

  return (
    <Modal isOpen={true} onClose={toggleModalClose} header="Convert Area" title="Area Converter">
    <div className="rounded-[4px] flex items-center justify-center">
      <div className="w-[830px] rounded-[4px] bg-[#F6F6F6]">
        {false &&
        <div className="flex justify-between items-center px-16 py-4 bg-[#FFFFFF]">
          <div className="text-[24px] font-bold text-[#000]">Area converter</div>
          <Image onClick={toggleModalClose} src="/closeIcon.svg" alt="Menu Icon" width={24} height={24} />
        </div>
        }
        <div className="flex flex-col justify-start place-items-start w-full">
          <div className="text-[20px] text-[#BBBBBB] font-[400] mb-4">Enter the value and desired units:</div>

          <div className="flex flex-col md:flex-row items-center space-x-4 mb-6 w-full">
            <div className="w-full md:w-[70%]">
              <label className="place-items-start flex text-sm font-medium text-[#5C2289] mb-1">From:</label>
              <div className="flex items-center bg-[#FEFEFE] h-[50px] rounded-[20px] shadow-md">
                <div className="w-[50%] relative">
                  <input
                    type="text"
                    placeholder="Enter the value"
                    value={fromValue}
                    onChange={(e) => setFromValue(e.target.value)}
                    className="bg-transparent outline-none text-[#000] placeholder-[#BBBBBB] text-[15px] font-[500]"
                  />
                  <FaChevronDown className="absolute right-4 top-[5px] text-[#BBBBBB] text-[15px] pointer-events-none" />
                </div>
                <div className="w-[1px] h-full bg-[#BBBBBB]"></div>
                <div className="w-[50%] relative place-items-center p-4 border-[#BBBBBB]">
                  <select
                    value={fromUnit}
                    onChange={(e) => setFromUnit(e.target.value)}
                    className="bg-transparent lg:text-[16px] text-[#BBBBBB] text-[12px] outline-none appearance-none"
                  >
                    <option value="Square Feet">Square Feet</option>
                    <option value="Square Meters">Square Meters</option>
                    <option value="Acres">Acres</option>
                  </select>
                  <FaChevronDown className="absolute right-4 top-[28px] text-[#BBBBBB] text-[15px] pointer-events-none" />
                </div>
              </div>
            </div>
            <div></div>
            <div className="w-full mt-2 md:mt-0 md:max-w-[200px]">
              <label className="place-items-start flex text-sm font-medium text-[#5C2289] mb-1">To:</label>
              <div className="flex w-full rounded-[18px] h-[50px] bg-[#FFFFFF] relative place-items-center p-4 border-[#BBBBBB]">
                <select
                  value={toUnit}
                  onChange={(e) => setToUnit(e.target.value)}
                  className="bg-transparent text-[#BBBBBB] text-[16px] outline-none appearance-none"
                >
                  <option value="Square Feet">Square Feet</option>
                  <option value="Square Meters">Square Meters</option>
                  <option value="Acres">Acres</option>
                </select>
                <FaChevronDown className="absolute right-4 top-[19px] text-[#BBBBBB] text-[15px] pointer-events-none" />
              </div>
            </div>
          </div>

          <button
            onClick={handleConvert}
            className="w-full bg-purple-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition"
          >
            Convert
          </button>

          {convertedValue && (
            <div className="mt-4 text-[18px] text-[#000000]">
              {fromValue} {fromUnit} = {convertedValue} {toUnit}
            </div>
          )}
        </div>
      </div>
    </div>
    </Modal>
  );
};

export default AreaConverterModal;
