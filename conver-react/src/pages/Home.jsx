import React from 'react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section Placeholder */}
      <section className="h-screen w-full bg-cover bg-center flex items-center bg-gray-100" style={{ backgroundImage: "url('https://media.istockphoto.com/id/185068843/photo/textile-industry-spinning-yarn-production-xxxl.webp?a=1&b=1&s=612x612&w=0&k=20&c=1z-XX6mmuJN_XEFE2uH9SdJFHGLB9Vs1AbysHr7wUF0=')" }}>
        <div className="p-16 max-w-3xl bg-white/80 ml-16 rounded shadow-lg backdrop-blur-sm">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Parekh Textile Chamber</h1>
          <h2 className="text-2xl font-light text-primary mb-6">Premium Textile Fabrics & Quality Manufacturing</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Parekh Textile Chamber delivers premium quality fabrics with modern textile innovation and trusted manufacturing standards. 
            We focus on craftsmanship, durability, and excellence in every thread we produce.
          </p>
          <button className="bg-primary text-white px-6 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-opacity-90 transition-all">
            Explore Our Fabrics
          </button>
        </div>
      </section>
      
      {/* Rest of home page components will go here */}
      <section className="p-16">
        <h2 className="text-3xl font-bold">More Content Coming...</h2>
      </section>
    </div>
  );
}
