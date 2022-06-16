import React from 'react'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';

import { formatearFecha } from '../helpers'

import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSuscriciones from '../img/icono_suscripciones.svg'
import IconoSalud from '../img/icono_salud.svg'

const diccionarioIconos = {
  ahorro: IconoAhorro,
  casa: IconoCasa,
  comida: IconoComida,
  gastos: IconoGastos,
  ocio: IconoOcio,
  salud: IconoSalud,
  suscripciones: IconoSuscriciones
}

const Gasto = ({ gasto, setGastoEditar, eliminarGasto }) => {

  const {categoriaGasto, nombreGasto, cantidadGasto, id, fecha} = gasto

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={ () => setGastoEditar(gasto)}>
        editar
      </SwipeAction>
    </LeadingActions>)
  
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={ () => eliminarGasto(id)}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )
  
  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
            <div className='contenido-gasto'>
              <img 
                src={diccionarioIconos[categoriaGasto]}
                alt='icono gasto'
              />
              <div className='descripcion-gasto'>
                <p className='categoria'>{categoriaGasto}</p>
                <p className='nombre-gasto'>{nombreGasto}</p>
                <p className='fecha-gasto'>
                  Agregado el: {' '}
                  <span>{formatearFecha(fecha)}</span>
                </p>
                

              </div>

            </div>
            <p className='cantidad-gasto'>${cantidadGasto}</p>
        </div>
        </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto