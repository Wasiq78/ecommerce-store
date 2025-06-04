import React from 'react';
import { useEffect } from 'react';
import ProductHeader from '../components/ProductHeader';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function Categories() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ProductHeader />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Categories;