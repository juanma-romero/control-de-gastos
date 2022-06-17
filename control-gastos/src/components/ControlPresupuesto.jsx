import {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
  gastos, 
  presupuesto,
  setGastos,
  setPresupuesto,
  setIsValidPresupuesto
  }) => {

  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidadGasto + total, 0)
    const totalDisponible = presupuesto - totalGastado

    const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(0)

    
    setDisponible(totalDisponible)
    setGastado(totalGastado)
    
    setTimeout( () => {
      setPorcentaje(nuevoPorcentaje), 1500})


  }, [gastos])




  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }

  const handleResetApp = () => {
    const resultado = confirm('Deseas resetear toda la app?')
    if (resultado) {
      setPresupuesto(0)
      setGastos([])
      setIsValidPresupuesto(false)
    } 
  }

  return (
    <div className='contenedor-presupuesto sombra contenedor dos-columnas'>
        <div>
          <CircularProgressbar
            value={porcentaje}
            styles={buildStyles({
              pathColor: porcentaje > 100 ? 'red': '#3B82F6',
              trailColor: '#f5f5f5',
              textColor: '#3B82F6'
            })}
            text= {`${porcentaje}% gastado `}
          />
        </div>
        <div className='contenido-presupuesto'>
            <button
              className='reset-app'
              type='button'
              onClick={handleResetApp}  
            >Resetear App</button>

            <p><span>Presupuesto:</span>{' '}{formatearCantidad(presupuesto)}</p>
            <p
              className={`${disponible < 0 ? 'negativo':''}`}
            ><span>Disponible:</span>{' '}{formatearCantidad(disponible)}</p>
            <p><span>Gastado:</span>{' '}{formatearCantidad(gastado)}</p>
        </div>
    </div>
  )
}

export default ControlPresupuesto