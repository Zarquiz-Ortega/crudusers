import React from 'react'
import './style/Alert.css'

const Alerta = ({ alert, setAlert, setPage}) => {

    const{name, msj} = alert

    const confirm = () => {
        setAlert()
        setPage(1)
    }

    const handelClose = () => {
        setAlert()
        setPage(1)
    }

    return (
        <div className={`alert__back ${alert && 'active'}`} >
            <div className='alert'>
                <button type='button' onClick={handelClose} className='alert__close' ><ion-icon name="close-outline"></ion-icon></button>
                <h4>{msj}  {name} </h4>
                <button className='alert__btn' type='button' onClick={confirm} > Aceptar </button>
            </div>
        </div>
    )
}

export default Alerta