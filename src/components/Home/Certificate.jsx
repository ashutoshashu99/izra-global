import React from 'react'
import iso from '../../assets/Logos/iso.png'
import apeda from '../../assets/Logos/apeda.png'
import msme from '../../assets/Logos/msme.png'
import fssai from '../../assets/Logos/fssai.png'
function Certificate() {
  return (
    <>
    <div className="flex flex-row items-center justify-around">
        <img src={msme} alt="msme logo" className='w-20 sm:w-52'/>
        <img src={apeda} alt="msme logo" className='w-20 sm:w-52'/>
        <img src={fssai} alt="msme logo" className='w-20 sm:w-52'/>
        <img src={iso} alt="msme logo" className='w-20 sm:w-52'/>
    </div>
    </>
  )
}

export default Certificate