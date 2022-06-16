import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'




function App() {
  const [gastos, setGastos] = useState([])

  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modalGasto, setModalGasto] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModalGasto(true)
      
      setTimeout(() => {
      setAnimarModal(true)
    }, 1000)
    }
  }, [gastoEditar]);

  const handleNuevoGasto = () => {
    setModalGasto(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 1000)
  }
  
  const guardarGasto = gasto => {
    if (gasto.id) {
      const gastoActualizado = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastoActualizado)
    } else {
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }  

    setAnimarModal(false)

    setTimeout( () => {
      setModalGasto(false)
    }, 500)
  }

  const eliminarGasto = id => {
        console.log('elimina',id)
  }


  return (
    <div className={modalGasto ? 'fijar': ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              setGastoEditar={setGastoEditar}
              gastos={gastos}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className='nuevo-gasto'>
            <img 
              src={IconoNuevoGasto}
              alt='icono nuevo gasto'
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
        {modalGasto && <Modal
                          setModalGasto={setModalGasto}
                          animarModal={animarModal}
                          setAnimarModal={setAnimarModal}
                          guardarGasto={guardarGasto}
                          gastoEditar={gastoEditar}
                          />}
        
    </div>
  )
}

export default App
