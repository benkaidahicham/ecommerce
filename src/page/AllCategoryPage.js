import React from 'react'
import { CategoryContainer } from '../components/Category/CategoryContainer'
import Paagination from '../components/Utlity/Paagination'

export const AllCategoryPage = () => {
  return (
    <div style={{minHeight:"470px"}}>
      
        <CategoryContainer/>
        <Paagination />
      
    </div>
  )
}
