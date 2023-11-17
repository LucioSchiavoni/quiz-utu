import React from 'react'
import { Link } from 'react-router-dom'
import Map from './Map'
import { useState, useEffect } from 'react'

const Ubicacion = () => {

      const [ubicacion, setUbicacion] = useState(null);


  useEffect(() => {
    obtenerUbicacion();
  }, []);

  const obtenerUbicacion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        mostrarPosicion
      );
    } else {
      setError("La geolocalización no es compatible en este navegador.");
    }
  };

  const mostrarPosicion = (posicion) => {
    const latitud = posicion.coords.latitude;
    const longitud = posicion.coords.longitude;

    // Puedes usar servicios de geocodificación para obtener una dirección legible
    // En este ejemplo, simplemente mostramos las coordenadas
    setUbicacion(`Latitud: ${latitud}, Longitud: ${longitud}`);
  };

  return (
    <div className='w-full'>
         <div>
            <article className='space-y-10'>
              <Link to='/' className='bg-white rounded-md text-black p-8 text-xl font-semibold py-2 hover:bg-gray-200 hover:text-black '>Volver</Link>
        <h2 className='text-3xl font-semibold'>Has completado el Quiz</h2>
       
            <p className='text-xl font-semibold'>Usted se encuentra aqui: {ubicacion}</p>
             <p className='text-xl font-semibold'>Ubicacion del evento: </p>
        <Map/>   
            </article>
       
    </div>
    </div>
   
  )
}

export default Ubicacion