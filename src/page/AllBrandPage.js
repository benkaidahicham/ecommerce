import React from 'react'
import { AllBrand } from '../components/Brand/AllBrand'
import Paagination from '../components/Utlity/Paagination'


export const AllBrandPage = () => {
  return (
    <div style={{minHeight:"470px"}}>
        <AllBrand/>
        <Paagination />
      
    </div>
  )
}
