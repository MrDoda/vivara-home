import React from "react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="font-bold mr-4">MojeLogo</div>
          <div className="font-bold">Vivara Consulting</div>
        </div>
        <div>
          <Link href="#clientsection" className="mx-4 hover:text-gray-300">
            Klienti
          </Link>
          <Link href="#about" className="mx-4 hover:text-gray-300">
            Náš tým
          </Link>
          {/* Další odkazy */}
        </div>
      </div>
    </nav>
  );
};
