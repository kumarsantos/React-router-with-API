import React from 'react'
import './ContentSection.css'





const ContentSection = ({users,SetUsers,message,SetMessage,FetchData,ToggleUser}) => {



React.useEffect(()=>{
    FetchData();
    
    
},[])


    return (
        <div className="content_section">
            <table>
                <thead>
                <tr className="header">
                    <th>Email Address <span><i className="fa fa-arrow-down" aria-hidden="true"></i></span></th>
                    <th>Name <span><i className="fa fa-arrow-down" aria-hidden="true"></i></span></th>
                    <th>Created On <span><i className="fa fa-arrow-down" aria-hidden="true"></i></span></th>
                    <th>Role <span><i className="fa fa-arrow-down" aria-hidden="true"></i></span></th>
                    <th>Status <span><i className="fa fa-arrow-down" aria-hidden="true"></i></span></th>
                    <th> Actions</th>
                </tr>
                </thead>
                <tbody>
                    {  
                    users && users.map((user,i)=>{
                        let color="#"+Math.floor(Math.random()*16777215).toString(16);
                return( 
                <tr className="content" key={i}>
                    
                    <td><span className="email_cap" style={{backgroundColor:color}}>{user.email[0]}</span> {user.email}</td>
                    <td>{user.fullName}</td>
                    <td>{user.createdDt}</td>
                    <td>Member</td>
                    {user.isActive?<td onClick={e=>ToggleUser(user._id)}><span><i className="fas fa-star active"></i></span>Active</td>
                    :<td onClick={e=>ToggleUser(user._id)}><span><i className="fas fa-star inactive"></i></span>Inactive</td>}
                    <td style={{fontWeight:"700",fontSize:"18px"}}> ... </td>

                </tr>)
                    
                })      
                
            }
            </tbody>
              
            </table>
            

        </div>
    )
}

export default ContentSection
