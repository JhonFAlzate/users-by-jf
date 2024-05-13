

import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setUserSelected, setFormIsOpen, succesDelete, setSuccesDelete}) => {


const handleDelete = () => {
    deleteUser(user.id)
    setSuccesDelete(true)

}

const handleEdit = () => {
    setUserSelected(user)
    setFormIsOpen(true)
    
}

const handleClose = ()=> {
  setSuccesDelete(false)
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

       
      <div className={`user_succsessful ${succesDelete || "user_successful_close"}`}>
        <div className='user_window'>
        <h2 className='user_message_delete_title'>Deleted User</h2>
        
         <p className='user_message_delete_p'>The user <span className='user_message_delete_user'>{user.first_name} {user.last_name}</span> has been eliminated</p>
         <button onClick={handleClose} className='user_message_delete_btn'>accept</button>
      </div>
     </div>

    </>
  
  )
}

export default UserCard