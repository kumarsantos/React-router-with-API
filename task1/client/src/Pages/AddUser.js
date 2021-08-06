import React from 'react'
import Button from '../Components/Button'
import './AddUser.css'
import user from '../source/user.svg'
import ContentSection from './ContentSection'


const AddUser = ({SetOpen,trigger,users,SetUsers,message,SetMessage,FetchData,ToggleUser}) => {

    const UserClick=(e)=>{
        FetchData()
        SetOpen(!trigger)

    }
    return (
        <div className="add_user">

            <div className="top_section">

                <div className="username_section_char">

                    <div className="username_container">
                        <div className="help_btn">
                            <span>?</span>
                        </div>
                        <div className="username_letter_caption">
                            <span>A</span>
                        </div>
                    </div>

                </div>

                <div className="adduser_btn_section">

                    <div className="username_section">Users</div>

                    <div className="adduser_btn_container">
                        <div className="number_of_users">Number of users: {users.length}</div>
                        <div className="line"></div>

                        <div className="adduser_btn">
                            <Button title="Add User" cls="add_btn" icon={user} iconclass="icon" onClick={e=>{
                               UserClick(e)
                            }
                                }/>
                        </div>
                    </div>

                </div>


            </div>
            <ContentSection users={users} SetUsers={SetUsers} message={message} SetMessage={SetMessage} FetchData={FetchData} ToggleUser={ToggleUser}/>
        </div>
    )
}

export default AddUser
