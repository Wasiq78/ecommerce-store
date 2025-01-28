import React from 'react'
import ProductHeader from '../components/ProductHeader'
import { Outlet } from 'react-router-dom'

function Categories() {
  return (
    <>
    <ProductHeader />
    <Outlet/>
    </>
  )
}

export default Categories