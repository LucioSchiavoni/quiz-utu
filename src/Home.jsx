import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from './data.json';


const Home = () => {
  // Los useState son hooks propios de la libreria react que me dan un valor y una funcion, para actualizar ese valor, en este caso la variable preguntas es un valor que va cambiando de estados, quien los cambia? setPreguntas que se utiliza como funcion la cual devolvera el valor del estado preguntas, aqui no hace falta usar la funcion setPreguntas porque el useState se inicializa directamente con los valores del json osea que el estado preguntas esta inicializado ya con todos los valores del json para traer.
  const [preguntas, setPreguntas] = useState(data);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState('');
  const [mostrarPista, setMostrarPista] = useState(false);

  // esto se utiliza para redirigir al usuario hacia otra pagina, en este caso lo redirigimos mas adelante hacia la pagina Ubicacion
  const navigate = useNavigate();

  const avanzarPregunta = () => {
    // aqui en el boton avanzarpregunta reniciamos la respuesta selecionada poniendo como vacio la funcion setRespuestaSeleccionada eso hace el que valor respuetaSeleccionada vuelva a estar en vacio
    setRespuestaSeleccionada('');
    // aqui le damos el valor previo mas 1 ya que al darle al siguiente se sumara 1 
    setPreguntaActual(prev => prev + 1);

    setMostrarPista(false);

    if (preguntaActual + 1 === preguntas.length) {
     //una vez se terminan las preguntas se redirige a la pagina ubicacion
      navigate('/ubicacion');
    }
  };

  const verificarRespuesta = () => {
    // al darle al boton verificar respuesta 
    // creamos una constante que tiene el valor de la respuesta correcta 
    const respuestaCorrecta = preguntas[preguntaActual].respuestaCorrecta;
    if (respuestaSeleccionada === respuestaCorrecta) {
      // si respuestaSeleccionada que tiene el valor que ingresa el usuario es igual al valor del json de la respuesta correcta, se ejecuta la funcion de avanzarPregunta 
      avanzarPregunta();
    } else {
      // de lo contrario la funcionMostrar pista se convierte en true
      setMostrarPista(true);
    }
  };

  return (
    <>
      <div className='text-3xl '>
        <h1>Quiz:</h1>

        {preguntaActual < preguntas.length && (
          <div key={preguntaActual}>
            {/* de mi json que esta en preguntas extraigo preguntaActual y consumo el valor de esa pregunta */}
            <p className='mb-5'>{preguntas[preguntaActual].pregunta}</p>
            <div className='grid grid-cols-2 gap-5 w-8/12 m-auto mb-5 bg-white text-black rounded-lg p-4'>
              {/* luego mapeo las 4 opciones de esa pregunta ponienod opcion como el valor para mapearlo y opcionIndex para marcar el indice de cada uno */}
              
              {preguntas[preguntaActual].opciones.map((opcion, opcionIndex) => (
                
                <div key={opcionIndex} className='flex '>
                  <input
                    type="radio"
                    id={opcion}
                    name="respuesta"
                    value={opcion}
                    className='form-control'
                    // respuestaSeleccionada capturara la opcion que ingrerso el user
                    checked={respuestaSeleccionada === opcion}
                    // al darle al boton la funcion setRespuesta actualiza el valor 
                    onChange={() => setRespuestaSeleccionada(opcion)}
                  />
                  <label htmlFor={opcion}>{opcion}</label>
                </div>
              ))}
            </div>
            {/* el boton que valida si la respuesta es correcta o no */}
            <button onClick={verificarRespuesta} className='bg-white  text-black ml-5 text-xl font-semibold hover:bg-gray-300 hover:scale-125 transition-all duration-300 delay-150 '>Verificar respuesta</button>


            <button onClick={avanzarPregunta} className='bg-white  text-black ml-5 text-xl font-semibold hover:bg-gray-300 hover:scale-125 transition-all duration-300 delay-150 '>Siguiente pregunta</button>
          </div>
          
        )}
        {/* si mostrar pista es true, muestra la pista */}
            {mostrarPista && (
              <div>
               
                <p className='bg-white p-4 rounded-md text-black mt-5'>Pista: {preguntas[preguntaActual].pista}</p>
              </div>
            )}
      </div>
    </>
  );
};

export default Home;
