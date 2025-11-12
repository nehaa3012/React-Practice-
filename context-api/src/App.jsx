import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;