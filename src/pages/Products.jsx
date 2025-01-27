import React from 'react'
import ProductHeader from '../components/ProductHeader'
import { Outlet } from 'react-router-dom'

function Products() {
  return (
    <>
    <ProductHeader />
    <Outlet/>
    </>
  )
}

export default Products