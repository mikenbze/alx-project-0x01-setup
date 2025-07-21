import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 p-4 mt-8">
      © {new Date().getFullYear()} My App. All rights reserved.
    </footer>
  );
};

export default Footer;
