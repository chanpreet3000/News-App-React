import React from 'react'
import loading from '../loading.svg'
export default function Spinner() {
  return (
    <div className='text-center'>
        <img src={loading}></img>
    </div>
  )
}
