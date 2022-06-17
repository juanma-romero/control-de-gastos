import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import Filtros from './components/Filtros'
import ListadoGastos from './components/ListadoGastos'
import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'




function App() {
  const [gastos, setGastos] = useState(
    (localStorage.getItem('gastos')) ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  const [modalGasto, setModalGasto] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})
  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState([]);


  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModalGasto(true)
      
      setTimeout(() => {
      setAnimarModal(true)
    }, 1000)
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter( gasto => gasto.categoriaGasto === filtro)
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro])




  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])

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
      setGastoEditar({})
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
        const gastoActualizados = gastos.filter( gasto => gasto.id !== id)
        setGastos(gastoActualizados)
  }


  return (
    <div className={modalGasto ? 'fijar': ''}>
      <Header
        setGastos={setGastos}
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos 
              setGastoEditar={setGastoEditar}
              gastos={gastos}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
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
                          setGastoEditar={setGastoEditar}
                          />}
        
    </div>
  )
}

export default App
