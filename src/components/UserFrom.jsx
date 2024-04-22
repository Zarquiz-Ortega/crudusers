import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './style/UserFrom.css'

const UserFrom = ({ createUser, updateUser, editUser, setUpdateUser, isOpen, setIsOpen, setAlert }) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        if (updateUser) {
            reset(updateUser)
            setIsOpen(true)

        }
    }, [updateUser])


    const submit = data => {
        //console.log(data)
        if (updateUser) {
            editUser('users', data, updateUser.id)
            setUpdateUser()
            setAlert({ name: `${updateUser.first_name} ${updateUser.last_name}`, msj: 'Se han actualizado los datos del usuario' })
        } else {
            createUser('users', data)
            setAlert({ name: `${data.first_name} ${data.last_name}`, msj: 'Se ha creado el usuario ' })
        }
        setIsOpen(false)
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
    }

    const handelClose = () => {
        setIsOpen(false)
        setUpdateUser()
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
    }

    return (
        <div className={`from__back ${isOpen && 'active'}`} >
            <form className='form' onSubmit={handleSubmit(submit)} >
                <button type='button' onClick={handelClose} className='form__close' ><ion-icon name="close-outline"></ion-icon></button>
                <h2 className='form__titel' > {updateUser ? 'Editar usuario' : 'Nuevo usuario'} </h2>
                <div className='form__item' >
                    <label htmlFor="first_name">First Name</label>
                    <input {...register('first_name')} id='first_name' type="text" placeholder='First Name' />
                </div>
                <div className='form__item'>
                    <label htmlFor="last_name">Last Name</label>
                    <input {...register('last_name')} id='last_name' type="text" placeholder='Last Name' />
                </div>
                <div className='form__item'>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} id='email' type="text" placeholder='Email' />
                </div>
                <div className='form__item'>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} id='password' type="password" placeholder='Password' />
                </div>
                <div className='form__item'>
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register('birthday')} id='birthday' type="date" />
                </div>
                <button className='form__send'>{updateUser ? 'Guardar cambios' : 'Agregar nuevo usuario '} </button>
            </form>
        </div>
    )
}

export default UserFrom