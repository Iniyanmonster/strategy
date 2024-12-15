import React from "react";
import user from '../../assets/user-icon.jpg';
import companyIcon from '../../assets/company-icon.png'

export default function Header()  {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-500 text-white flex justify-between items-center px-6 py-4 shadow-md z-50">
      <div className="flex items-center space-x-2">
        <img
          src={companyIcon}
          alt="Left Icon"
          className="w-52"
        />
      </div>
      <div className="flex items-center space-x-4">
        <img
          src={user}
          alt="Right Icon"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm">Admin</span>
      </div>
    </header>
  );
};

