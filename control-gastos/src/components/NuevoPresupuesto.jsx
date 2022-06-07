import { useState} from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('');

  const handlePresupuesto = (e) => {
    e.preventDefault()

    if (!presupuesto || presupuesto < 0) {
      setMensaje('No es un presu valido')
      return
    } 
    setMensaje('')
    setIsValidPresupuesto(true)
  }
    
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form 
          className='formulario'
          onSubmit={handlePresupuesto}
          >
          
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input 
                    className='nuevo-presupuesto'
                    type='number'
                    placeholder={presupuesto}
                    onChange={ e => setPresupuesto(Number(e.target.value))}
                />
                <input 
                    type='submit'
                    value='Ingresa tu presupuesto'
                    
                />
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            </div>
        </form>
    </div>
  )
}

export default NuevoPresupuesto