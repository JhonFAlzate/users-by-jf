
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
  const [userDeleted, setUserDeleted] = useState()
 

  useEffect(() => {
   
    getUser()

  }, [])
  
const hadleOpenForm = () => {
  setFormIsOpen(true)
}
const handleClose = ()=> {
  setSuccesDelete(false)
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
            setUserDeleted = {setUserDeleted}
            setUserSelected={setUserSelected}
            setFormIsOpen = {setFormIsOpen}
            succesDelete = {succesDelete}
            setSuccesDelete= {setSuccesDelete}
            />
          ))
        }
        {
          (succesDelete )
          ? ( <div className={`user_succsessful ${succesDelete || "user_successful_close"}`}>
          <div className='user_window'>
          <h2 className='user_message_delete_title'>Deleted User</h2>
           <p className='user_message_delete_p'>The user <span className='user_message_delete_user'>{userDeleted.first_name} {userDeleted.last_name} </span>has been eliminated</p>
           <button onClick={handleClose} className='user_message_delete_btn'>accept</button>
        </div>
       </div>)
       :  console.log(succesDelete)

        }
      </div>
      
    </>
  )
}

export default App
