import React from "react";

export const Footer = () => {
  return (
    <footer className="text-white py-5 px-4 sm:px-6">
      <hr className="border-gray-700 mb-4"/>
      <div className="container max-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold italic mb-4 md:mb-0">Portfolio</h1>
        <p className="text-sm text-center md:text-left">2025 My Website Portfolio. All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
