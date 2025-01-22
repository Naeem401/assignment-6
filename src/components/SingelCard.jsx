import React from 'react'

function SingelCard({card}) {
    const {name, image, description} = card;
  return (
    <div className='space-y-2 px-12 text-[#FFFFFF]'>
<img src={image} alt="" />
<h2 className='font-semibold text-[28px]'>{name}</h2>
<p className='text-[22px] text-[#d2d1d1]'>{description}</p>
    </div>
  )
}

export default SingelCard