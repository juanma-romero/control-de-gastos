import CerrarBoton from '../img/cerrar.svg'

const Modal = ({setModalGasto}) => {

    const handleOcultarModal = () => {
        setModalGasto(false)
    }

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBoton}
                    alt='cerrar modal'
                    onClick={handleOcultarModal}
                />
            </div>
        </div>
  )
}

export default Modal