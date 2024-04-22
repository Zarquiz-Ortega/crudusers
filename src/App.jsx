import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud'
import UserFrom from './components/UserFrom'
import UserCard from './components/UserCard'
import Alerta from './components/Alerta'
import Pagination from './components/Pagination'

function App() {

  const base = 'https://users-crud.academlo.tech/'

  const [updateUser, setUpdateUser] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [alert, setAlert] = useState()
  const [page, setPage] = useState(1)

  const [users, isLogin, getUsers, createUser, deleteUser, editUser] = useCrud(base)

  useEffect(() => {
    getUsers('users')
  }, [])

  const handelOpen = () => {
    setIsOpen(true)
  }

  const quantity = 6
  const total = Math.ceil(users?.length / quantity)

  const parts = () => {
    const last = quantity * page
    const first = last - quantity
    return users?.slice(first, last)
  }

  return (
    <div className='app' >
      <header className='app__header' >
        <h2 lassName='app__titel' >CRUD Users</h2>
        <button type='button' className='create' onClick={handelOpen} >+ Crear nuevo usuario</button>
      </header>
      {
        alert &&
        <Alerta
          alert={alert}
          setAlert={setAlert}
          setPage={setPage}
        />
      }
      <UserFrom
        createUser={createUser}
        updateUser={updateUser}
        editUser={editUser}
        setUpdateUser={setUpdateUser}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setAlert={setAlert}
      />
      <div className='app__container' >
        {
          isLogin ?
            <h2>Loading...</h2>
            :
            parts()?.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setUpdateUser={setUpdateUser}
                setAlert={setAlert}
                confirm={confirm}
              />
            ))
        }
      </div>
      <div className='app__pagination' >
        {
          total > 1 &&
          <Pagination
            page={page}
            setPage={setPage}
            total={total}
          />
        }
        </div>
    </div>
  )
}

export default App
