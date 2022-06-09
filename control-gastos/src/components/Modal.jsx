import CerrarBoton from '../img/cerrar.svg'

const Modal = ({setModalGasto, animarModal, setAnimarModal}) => {

    const handleOcultarModal = () => {
        
        setAnimarModal(false)

        setTimeout( () => {
            setModalGasto(false)
        }, 500)
    }

    const categorias = [
        {value: '', name : '-- Selecciona --'},
        {value: 'ahorro', name : 'Ahorro'},
        {value: 'comida', name : 'Comida'},
        {value: 'casa', name : 'Casa'},
        {value: 'salud', name : 'Salud'},
        {value: 'suscripciones', name : 'Suscripciones'},
    ]

    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBoton}
                    alt='cerrar modal'
                    onClick={handleOcultarModal}
                />
            </div>
            <form className={`formulario ${animarModal? 'animar': 'cerrar'}`}>
                <legend>Nuevo Gasto</legend>
                <div className='campo'>
                    <label htmlFor='nombre'>Nombre Gasto</label>
                    <input
                        id='nombre'
                        type='text'
                        placeholder='Añade el gasto'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input
                        id='cantidad'
                        type='number'
                        placeholder='Añade cantidad'
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoria</label>
                    {/*<select
                        id='categoria'
                    ></select>*/}
                    <select id='categoria'>
                        {
                            categorias.map( (item, index) => {
                                return <option key={index} value={item.value}>{item.name}</option>
                            })
                        }
                    </select>
                </div>
                <input 
                    type='submit'
                    value='Añadir gasto'
                />
            </form>
        </div>
  )
}

export default Modal