import axios from 'axios'
import React from 'react'
import Button from '../Components/Button'
import './UserForm.css'

const UserForm = ({trigger,SetOpen,Fetchdata}) => {

    const [user,SetUser]=React.useState({
        fullName:'',
        email:'',
        password:'',
        conPassword:''
    })
    

    const [err,Seterr]=React.useState(null);
    const [message,SetMessage]=React.useState(null);

    const UserMap=(e)=>{
        SetUser({...user,[e.target.name]:e.target.value})
    }

    const AddUser=(e)=>{
        e.preventDefault();

        axios.post(`/registration`,user).then(res=>{
            
            SetMessage(res.data.message)
            Seterr(res.data.success)

          
            
        }).catch(e=>console.log(e))

       SetUser({fullName:'',
       email:'',
       password:'',
       conPassword:''})


       if(err){

        SetOpen(!trigger)
    }
    }

    React.useEffect(()=>{
        
    
    },[])

    const Close=(e)=>{
        SetOpen(!trigger);
        // Fetchdata();
    }


    return (
        <div className="userform">
            <div className="user_top_section">
                <div>Add User</div>
                <div onClick={e=>{Close(e)}}>Close</div>
            </div>
            
            <form onSubmit={e=>AddUser(e)}>
                <table>
                    <thead></thead>
                    <tbody>
                    <tr>
                        <th><input type="text" placeholder="Name" name="fullName" value={user.fullName} onChange={e=>UserMap(e)}/></th>
                        <th><input type="email" placeholder="Email Address" name="email" value={user.email} onChange={e=>UserMap(e)} /></th>
                    </tr>
                    <tr>
                        <th><input type="password" placeholder="Password" name="password" value={user.password} onChange={e=>UserMap(e)}/></th>
                        <th><input type="password" placeholder="Confirm Password" name="conPassword" value={user.conPassword} onChange={e=>UserMap(e)}/></th>
                    </tr>
                    <tr>{(!err && message) ? <p className="err">{message}</p>:(err && message) && <p className="succ">{err && message}</p>}</tr>
                    <tr>

                        <Button cls='add_btn2'   title="Add User" onClick={e=>AddUser(e)}/>

                    </tr>
                    </tbody>
                </table>
            </form>
            
        </div>
    )
}

export default UserForm
