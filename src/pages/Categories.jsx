import React from 'react'
import { useEffect } from 'react';
import ProductHeader from '../components/ProductHeader'
import { Outlet } from 'react-router-dom'

function Categories() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  }, []);
  
  return (
    <>
    <ProductHeader />
    <Outlet/>
    </>
  )
}

export default Categories