
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import useCrud from './hooks/useCrud'
import UserCard from './components/UserCard'

function App() {
  
  const [formIsOpen, setFormIsOpen] = useState(false)
  const [user, getUser, createrUser, deleteUser, updateUser] = useCrud('/users/')
  const [userSelected, setUserSelected] = useState()
  const [succes, setSucces] = useState(false)
  const [succesDelete, setSuccesDelete] = useState(false)
  
 

  useEffect(() => {
   
    getUser()

  }, [])
  
const hadleOpenForm = () => {
  setFormIsOpen(true)
}

  return (
    <>
      <div>
        <header className='header'>
          <h1 className='header_title'>USERS</h1>
          <button className='header_btn' onClick={hadleOpenForm }> ➕ Create User New</button>
         
        </header>
       
       
        <FormUser createrUser = {createrUser}
        userSelected = {userSelected}
        updateUser= {updateUser}

        setUserSelected = {setUserSelected}
        formIsOpen = {formIsOpen}
        setFormIsOpen = {setFormIsOpen}
        succes = {succes}
        setSucces = {setSucces}
       
        />
      </div>
      <div className='user-container'>
        {
          user?.map(user => (
            <UserCard
            key = {user.id}
            user={user}
            deleteUser= {deleteUser}
            setUserSelected={setUserSelected}
            setFormIsOpen = {setFormIsOpen}
            succesDelete = {succesDelete}
            setSuccesDelete= {setSuccesDelete}
            />
          ))
        }
      </div>
      
    </>
  )
}

export default App
