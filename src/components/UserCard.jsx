

import { useState } from 'react'
import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setUserSelected, setFormIsOpen, setSuccesDelete, setUserDeleted}) => {



const handleDelete = () => {
    deleteUser(user.id)
    setSuccesDelete(true)
    setUserDeleted(user)
    

}

const handleEdit = () => {
    setUserSelected(user)
    setFormIsOpen(true)
    
}



  return (
    <>
    <article className="user">
    <h3 className="user_name">{user.first_name} {user.last_name}</h3>
    <hr className="user_hr" />
    <ul className="user_list">
      <li className="user_item"><span className="user_label">Email</span><span className="user_value">{user.email}</span></li>
      <li className="user_item"><span className="user_label">Birthday</span><span className="user_value">{user.birthday}</span></li>
    </ul>
    <footer className='user_footer'>
    <button className="user_btn user_delete" onClick={handleDelete}><i className="bx bxs-trash"></i></button>
    <button className="user_btn user_edit" onClick={handleEdit}><i className='bx bx-edit'></i></button>
    </footer>
     </article>

       
    

    </>
  
  )
}

export default UserCard