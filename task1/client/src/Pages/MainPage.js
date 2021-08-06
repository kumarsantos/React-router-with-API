import React from 'react'
import Button from '../Components/Button'
import Sidebar from '../Components/Sidebar'
import HeroSection from './HeroSection'
import PopUp from './PopUp'
import UserForm from './UserForm'
import axios from 'axios'



const MainPage = (props) => {


    
    const [users,SetUsers]=React.useState([])
    const [message,SetMessage]=React.useState([])
    const [open,SetOpen]=React.useState(false)
    
    
    
    const FetchData=()=>{
    axios.get("http://localhost:3005/viewUsers").then(res=>{SetUsers(res.data.data)})
}

const ToggleUser=(id)=>{      
    let url=`http://localhost:3005/update/${id}`
    axios.put(url).then(r=>{
        SetUsers(r.data)
        SetMessage(r.data.message)    
    })
}

React.useEffect(()=>{
    FetchData();
},[open])



    return (
        <div className="mainPage">
            <Sidebar />            
            <HeroSection  trigger={open} SetOpen={SetOpen} ToggleUser={ToggleUser} FetchData={FetchData} users={users} SetUsers={SetUsers } message={message} SetMessage={SetMessage} >
                
            </HeroSection>

            <PopUp trigger={open}>
                  <UserForm trigger={open} SetOpen={SetOpen} FetchData={FetchData}/>
            </PopUp>


           


        
            
        </div>
    )
}

export default MainPage
