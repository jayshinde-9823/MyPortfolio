import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 py-6 text-center text-gray-400 border-t border-gray-700">
      <p>© {new Date().getFullYear()} Jay Shinde. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

