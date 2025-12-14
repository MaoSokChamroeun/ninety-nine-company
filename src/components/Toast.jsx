import React, { useState, useEffect } from "react";
import logo from '../assets/logo.jpg'
import '../index.css'
const Toast = ({ message, duration = 5000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!show) return null;

  return (
    <div className="fixed top-10 right-1/2 transform translate-x-1/2 w-[600px] h-[800px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-2xl p-6 flex flex-col justify-between transition-all z-50" data-aos = "zoom-in">
      {/* Message content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <div className="max-w-2xl mb-10">
            <img src={logo} width={150} className="rounded-4xl" alt="" />
        </div>
        <h3 className="font-bold text-2xl text-gray-900 dark:text-gray-100 mb-4">
          Welcome! To <span className="text-pink-500 ">Ninety Nine Media</span>
        </h3>
        <p className="text-gray-700 text-lg">{message}</p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setShow(false)}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Toast;
