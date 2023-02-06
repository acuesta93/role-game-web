import React, { ReactElement } from 'react'

function Card({ title, imageUrl, content} : { title: string, imageUrl: string, content: string }): ReactElement {
  return (
    <div className='rounded-md text-white w-72 overflow-hidden hover:shadow-white hover:shadow-sm transition ease-in hover:scale-110'>
      <div className='overflow-hidden h-52'>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='m-4 mt-0'>
        <h3 className='font-bold'>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Card