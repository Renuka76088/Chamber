import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full min-h-screen bg-white text-gray-800">
        <Sidebar />
        <main className="flex-1 ml-72 min-h-screen transition-all duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Fallback route for subpages not yet completed */}
            <Route 
              path="*" 
              element={
                <div className="p-16">
                  <h2 className="text-4xl text-gray-400 font-bold">Page Under Construction</h2>
                  <p className="mt-4 text-gray-500">
                    This section is currently being migrated to React + Tailwind.
                  </p>
                </div>
              } 
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
