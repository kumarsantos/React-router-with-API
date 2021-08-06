import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AddUser from './AddUser'


const HeroSection = ({SetOpen,trigger,users,SetUsers,message,SetMessage,FetchData,ToggleUser}) => {
    

    return (
        <div className="hero_section">
             <Switch>
                <Route path="/adduser" >
                    <AddUser  SetOpen={SetOpen} trigger={trigger} users={users} SetMessage={SetMessage} SetUsers={SetUsers} FetchData={FetchData} ToggleUser={ToggleUser} message={message}/>                        
                </Route>
                <Route path="/" exact>
                    <AddUser SetOpen={SetOpen} trigger={trigger} users={users} SetMessage={SetMessage} SetUsers={SetUsers} FetchData={FetchData} ToggleUser={ToggleUser} message={message} />        
                </Route>
                <Route path="/upload" >
                    <h1>Upload</h1>
                </Route>
                <Route path="/timer" >
                    <h1>Timer</h1>
                </Route>
                <Route path="/server" >
                    <h1>Server</h1>
                </Route>
                <Route path="/firewall" >
                    <h1>FireWall</h1>
                </Route>
                <Route path="/lock" >
                    <h1>Locker</h1>
                </Route>
                <Route path="/todisk" >
                    <h1>To Disc</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default HeroSection
