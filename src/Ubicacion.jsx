import React from 'react'
import { Link } from 'react-router-dom'
import Map from './Map'

const Ubicacion = () => {
  return (
    <div className='w-full'>
         <div>
            <article className='space-y-10'>
              <Link to='/' className='bg-white rounded-md text-black p-8 text-xl font-semibold py-2 hover:bg-gray-200 hover:text-black '>Volver</Link>
        <h2 className='text-3xl font-semibold'>Has completado el Quiz</h2>
        <p className='text-xl font-semibold'>Ubicacion del evento: </p>
        <Map/>   
            </article>
       
    </div>
    </div>
   
  )
}

export default Ubicacion