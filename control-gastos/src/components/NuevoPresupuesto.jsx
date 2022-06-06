import React from 'react'

const NuevoPresupuesto = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Ingresa tu presupuesto'
                />
                <input 
                    type='submit'
                    value='Ingresar'
                />
            </div>
        </form>
    </div>
  )
}

export default NuevoPresupuesto