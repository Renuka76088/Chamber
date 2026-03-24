import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact Us' },
  { path: '/services', label: 'Our Chamber Services' },
  { path: '/management', label: 'Our Chamber Management' },
  { path: '/trade-enquiry', label: 'Trade Enquiry ' },
  { path: '/e-quotation', label: 'e-Quotation ' },
  { path: '/e-auction', label: 'e-Auction ' },
  { path: '/tender', label: 'Tender & Contract' },
  { path: '/career', label: 'Career Page' },
  { path: '/circular', label: 'Circular' },
  { path: '/blog', label: 'Blog' },
  { path: '/appointment', label: 'Visit with Appointment ' },
  { path: '/notice-board', label: 'Notice Board' },
  { path: '/association', label: 'Our Textile Association' },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen fixed top-0 left-0 bg-[#fefefe] border-r border-[#ececec] flex flex-col py-10 overflow-y-auto z-50">
      <h1 className="text-3xl font-bold text-center mb-12 w-full px-6">
        <NavLink to="/" className="text-black hover:text-primary transition-colors tracking-wide">
          PAREKH CHAMBER OF TEXTILE 
        </NavLink>
      </h1>
      <nav className="w-full flex-grow flex flex-col space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-[14px] px-8 py-2 font-medium tracking-wide transition-colors ${
                isActive 
                  ? 'text-primary' 
                  : 'text-[#000000B3] hover:text-primary focus:text-primary relative group'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto px-8 pt-10 text-[12px] text-gray-400 text-center">
        © {new Date().getFullYear()} Parekh Textile Chamber <br/>
        All rights reserved.
      </div>
    </aside>
  );
}
