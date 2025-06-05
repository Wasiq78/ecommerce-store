import React from 'react'
import { CircularProgress } from '@mui/joy'

function Circular({size,color}) {
  return (
    <div className='min-w-full h-full flex items-center justify-center'>
        <CircularProgress size={size} color={color} />
    </div>
  )
}

export default Circular