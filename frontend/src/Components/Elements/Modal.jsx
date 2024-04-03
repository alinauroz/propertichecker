import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, title, header, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div 
        ref={modalRef}
        className="bg-[#F6F6F6] rounded-lg shadow-lg w-11/12 md:w-auto mx-auto"
        style={{
          maxHeight: 'calc(100vh - 40px)',
          overflowY: 'auto'
        }}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className='text-[24px] font-bold text-[#000000]'>{header}</div>
          <button
            onClick={onClose}
            className="w-6 h-6 text-white bg-[#5C2289] hover:bg-[#4A1C6D] rounded-full flex items-center justify-center text-sm font-medium transition duration-300 ease-in-out"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
