import { useState } from 'react'
import Mensaje from './Mensaje';
import CerrarBoton from '../img/cerrar.svg'

const Modal = ({setModalGasto, animarModal, setAnimarModal}) => {

    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidadGasto, setCantidadGasto] = useState('');
    const [categoriaGasto, setCategoriaGasto] = useState('');
    const [mensajeValidacion, setMensajeValidacion] = useState('');

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

    const handleSubmit = e => {
        e.preventDefault()
        if ([nombreGasto, cantidadGasto, categoriaGasto].includes('')) {
            setMensajeValidacion('Todos los campos son obligatorios')

            setTimeout( () => {
                setMensajeValidacion('')
            }, 3000)
            return
        }
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
            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal? 'animar': 'cerrar'}`}>

                <legend>Nuevo Gasto</legend>

                {mensajeValidacion && <Mensaje tipo='error'>{mensajeValidacion}</Mensaje>}

                <div className='campo'>
                    <label htmlFor='nombreGasto'>Nombre Gasto</label>
                    <input
                        id='nombreGasto'
                        type='text'
                        placeholder='Añade el gasto'
                        value={nombreGasto}
                        onChange={(e) => setNombreGasto(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='cantidadGasto'>Cantidad</label>
                    <input
                        id='cantidadGasto'
                        type='number'
                        placeholder='Añade cantidad'
                        value={cantidadGasto}
                        onChange={(e) => setCantidadGasto(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor='categoriaGasto'>Categoria</label>
                    {/*<select
                        id='categoria'
                    ></select>*/}
                    <select
                        id='categoriaGasto'
                        value={categoriaGasto}
                        onChange={(e) => setCategoriaGasto(e.target.value)}
                        >                        
                    {/**
                     * map para iterar sobre variable categoria 
                     */}
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