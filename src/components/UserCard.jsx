import React from 'react'
import './style/UserCard.css'


/*
    los datos enviados por props se desestructuran entre {}
*/
const UserCard = ({ user, deleteUser, setUpdateUser, setAlert,}) => {

    //funcion para eliminar los usuarios
    const handelDelete = () => {
        deleteUser('users', user.id)
        setAlert({name: `${user.first_name} ${user.last_name}`, msj: 'Se ha eliminado al usuario'}) 
    }   

    //funcion para editar los usuarios 
    const handelEdist = () => {
        setUpdateUser(user) 
    }

    return (
        <section className='user' >
            <h4 className='user__name' > {user.first_name} {user.last_name} </h4>
            <hr className='user__line' />
            <ul className='user__list' >
                <li className='user__item' >
                    <span>Email</span>
                    <span> {user.email} </span>
                </li>
                <li className='user__item' >
                    <span>Birthday</span>
                    <span><ion-icon name="gift-outline"></ion-icon> {user.birthday} </span>
                </li>
            </ul>
            <hr className='user__line' />
            <div className='user__buttons' >
                <button className='user__btn delete' onClick={handelDelete} ><ion-icon name="trash-outline"></ion-icon></button>
                <button className='user__btn edit' onClick={handelEdist} ><ion-icon name="create-outline"></ion-icon></button>
            </div>
        </section>
    )
}

export default UserCard