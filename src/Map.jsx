import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'
import { useEffect, useMemo, useState } from 'react'

// api de google
const apiKey = import.meta.env.VITE_GOOGLE_MAP
const API = "AIzaSyD-seCYDLQMumBWgaKid6jVGxHpYH_eBys"

 export default function Map()  {


     const {isLoaded} = useLoadScript({ 
      googleMapsApiKey: API,})



   if (!isLoaded) return <div><p>Cargando...</p></div>




  return (
    <>
    <div className='mt-28   '>
      <MapComponents /> 
    </div>
    
    </>
  )
}

function MapComponents() {

  const center = useMemo(() => ({ lat: -34.862021,  lng: -56.169345}), []);
return (
  <>

     <GoogleMap zoom={10} center={center} mapContainerClassName='rounded-lg  w-[700px] h-[500px] m-auto '>
<MarkerF position={center} />
  </GoogleMap>

  
  </>

)
}
