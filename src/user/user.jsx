import React, {useState} from "react"
import "./user.css"
// import { Col, Row } from "react-bootstrap"
import SideMenuBar from "./SideMenuBar"
import Dashboard from "./dashbord"

const User = ()=>{
    const [mobileCheck, setMobilCheck] = useState(true)
    
    const mobileHandler = (condition)=>{
        setMobilCheck(condition)
    }

    return(
        <div className="user-dashbord-main">
            <div className="user-dashbord-body"> 
                
                <SideMenuBar mobileCheck={mobileHandler} />
                <Dashboard mobileCheck={mobileCheck} />
                
            </div>
        </div>
    )
}

export default User