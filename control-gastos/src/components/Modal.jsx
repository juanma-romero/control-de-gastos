import { useState, useEffect } from 'react'
import Mensaje from './Mensaje';
import CerrarBoton from '../img/cerrar.svg'

const Modal = ({
    setModalGasto, 
    animarModal, 
    setAnimarModal, 
    guardarGasto, 
    gastoEditar,
    setGastoEditar
    }) => {

    const [mensajeValidacion, setMensajeValidacion] = useState('');
    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidadGasto, setCantidadGasto] = useState('');
    const [categoriaGasto, setCategoriaGasto] = useState('');
    const [id, setId] = useState('');
    const [fecha, setFecha] = useState('');
   

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombreGasto(gastoEditar.nombreGasto)
            setCantidadGasto(gastoEditar.cantidadGasto)
            setCategoriaGasto(gastoEditar.categoriaGasto)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        } 
        
    }, [])

    const handleOcultarModal = () => {
        
        setAnimarModal(false)

        setGastoEditar({})

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
        guardarGasto({nombreGasto, cantidadGasto, categoriaGasto, id, fecha})
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

                <legend>{gastoEditar.nombreGasto? 'Editar gasto':'Nuevo Gasto'}</legend>

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
                    value={gastoEditar.nombreGasto? 'Guardar cambios':'Añadir gasto'}
                />
            </form>
        </div>
  )
}

export default Modal