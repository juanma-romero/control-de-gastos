import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className='contenedor-presupuesto sombra contenedor dos-columnas'>
        <div>grafica aqui</div>
        <div className='contenido-presupuesto'>
            <p><span>Presupuesto:</span>{' '}${presupuesto}</p>
        </div>
    </div>
  )
}

export default ControlPresupuesto