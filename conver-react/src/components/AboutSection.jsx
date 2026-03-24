import React from 'react';
import { FaCheck } from 'react-icons/fa';

export default function AboutSection() {
  return (
    <section className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div 
          className="w-full md:w-1/2 h-[500px] bg-cover bg-center shadow-lg rounded"
          style={{ backgroundImage: "url('https://media.istockphoto.com/id/174950853/photo/denim-textile-industry-weaving-jeans-fabric-on-airjet-looms.jpg?s=612x612&w=0&k=20&c=0wNOiYaE4aQJYwnLFLEHnCpBtl850pH2gbmy5up0sos=')" }}
        ></div>
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <span className="text-gray-400 font-medium tracking-widest uppercase text-[10px] block mb-2">Welcome</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 relative pb-4">
               About Parekh Textile Chamber
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed text-[15px]">
            Parekh Textile Chamber is committed to delivering premium quality fabrics with
            a perfect blend of tradition and modern textile innovation. Our focus is on
            craftsmanship, durability, and maintaining high standards in every fabric we produce.
          </p>
          <p className="text-gray-600 leading-relaxed text-[15px]">
            With years of experience in the textile industry, we aim to provide reliable
            manufacturing, superior fabric quality, and trusted partnerships that help
            businesses grow in the global textile market.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
              <span className="text-primary text-xl mb-4 bg-gray-50 p-4 rounded shadow-sm"><FaCheck /></span>
              <h3 className="font-medium text-gray-800 text-[14px]">We are <br/>passionate</h3>
            </div>
            <div className="flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
              <span className="text-primary text-xl mb-4 bg-gray-50 p-4 rounded shadow-sm"><FaCheck /></span>
              <h3 className="font-medium text-gray-800 text-[14px]">Honest <br/>Dependable</h3>
            </div>
            <div className="flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
              <span className="text-primary text-xl mb-4 bg-gray-50 p-4 rounded shadow-sm"><FaCheck /></span>
              <h3 className="font-medium text-gray-800 text-[14px]">Always <br/>Improving</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
