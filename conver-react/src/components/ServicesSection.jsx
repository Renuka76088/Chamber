import React from 'react';
import { FaHardHat, FaPencilRuler, FaCogs, FaTools } from 'react-icons/fa';

export default function ServicesSection() {
  const features = [
    { icon: <FaHardHat />, title: "Fabric Manufacturing", desc: "We produce high-quality fabrics using advanced technology." },
    { icon: <FaPencilRuler />, title: "Textile Design & Development", desc: "Focusing on innovative textile designs and modern patterns." },
    { icon: <FaCogs />, title: "Fabric Processing", desc: "Premium finishing, dyeing, and processing to deliver superior fabrics." },
    { icon: <FaTools />, title: "Quality Control", desc: "Strict quality checks to guarantee reliable products." }
  ];

  const cards = [
    { title: "Cotton Fabrics", img: "images/services-1.jpg" }, // Adjusting for local asset
    { title: "Designer Textiles", img: "https://plus.unsplash.com/premium_photo-1682142721713-2b076bc2b29b?w=600&auto=format&fit=crop&q=60" },
    { title: "Premium Fabric Quality", img: "https://media.istockphoto.com/id/1281680639/photo/peruvian-woman-weaving-the-sacred-valley-chinchero.jpg?s=612x612&w=0&k=20" },
    { title: "Fabric Processing", img: "https://media.istockphoto.com/id/535399550/photo/textile-industry.jpg?s=612x612&w=0&k=20" },
    { title: "Custom Textile Solutions", img: "https://media.istockphoto.com/id/1180345896/photo/indian-factory-workers-folding-and-wrapping-textiles.jpg?s=612x612&w=0&k=20" }
  ];

  return (
    <section className="py-20 px-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-16">
           <span className="text-gray-400 font-medium tracking-widest uppercase text-[10px] block mb-2">What We Do</span>
           <h2 className="text-3xl font-bold text-gray-900">Our Textile Expertise</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
           <div className="w-full lg:w-1/2 space-y-4">
             {features.map((f, i) => (
               <div key={i} className="flex gap-6 items-start bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow group">
                 <div className="text-primary text-3xl mt-1 group-hover:scale-110 transition-transform">{f.icon}</div>
                 <div>
                   <h3 className="text-[17px] font-medium text-gray-900 mb-2">{f.title}</h3>
                   <p className="text-gray-500 text-[14px] leading-relaxed">{f.desc}</p>
                 </div>
               </div>
             ))}
           </div>
           
           <div className="w-full lg:w-1/2">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
               {cards.map((c, i) => (
                 <div key={i} className={`group relative h-48 md:h-auto overflow-hidden rounded shadow-sm ${i === 4 ? 'sm:col-span-2' : ''}`}>
                   <div 
                     className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                     style={{ backgroundImage: `url('${c.img}')` }}
                   ></div>
                   <div className="absolute inset-0 bg-black/40 xl:bg-black/20 group-hover:bg-black/60 transition-colors flex items-end p-6">
                     <h3 className="text-white text-lg font-medium">{c.title}</h3>
                   </div>
                 </div>
               ))}
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
