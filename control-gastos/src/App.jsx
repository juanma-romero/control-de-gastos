import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'



function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modalGasto, setModalGasto] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const handleNuevoGasto = () => {
    setModalGasto(true)

    setTimeout(() => {
      setAnimarModal(true)
    }, 1000)
  }
  
  return (
    <>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className='nuevo-gasto'>
          <img 
            src={IconoNuevoGasto}
            alt='icono nuevo gasto'
            onClick={handleNuevoGasto}
          />
        </div>
      )}
        {modalGasto && <Modal
                          setModalGasto={setModalGasto}
                          animarModal={animarModal}
                          setAnimarModal={setAnimarModal}
                          />}
        
    </>
  )
}

export default App
