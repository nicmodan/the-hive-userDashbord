import React, {useState} from "react"
import {BiCaretDown, BiCaretUp, BiPen, BiPurchaseTag} from "react-icons/bi"
import { FiArrowLeft, FiArrowRight, FiSettings } from "react-icons/fi"
import {BsCartDash, BsCreditCard} from "react-icons/bs"
import {MdOutlineSpaceDashboard} from "react-icons/md"
import {SiGoogleanalytics} from "react-icons/si"
import { IoExitOutline } from "react-icons/io5"
import {AiOutlineRise} from "react-icons/ai"
import {RiHome2Line} from "react-icons/ri"
import { Link } from "react-router-dom"

// importing recources
import logo from "../Resources/Logo.png"
import "./user.css"

const SideMenuBar = (props) =>{

    const {mobileCheck} = props

    const [active, setActive] = useState(true)
    const [activeTopNav, setActiveTopNav] = useState(true)
    
    const allMenusLinksAndIcons = [
        {menu: "Home", icon: <RiHome2Line />, links: "/"},
        {menu: "Upgrades", icon: <AiOutlineRise />, links: "/Upgrades"},
        {menu: "Analytics", icon: <SiGoogleanalytics />, links: "/Analytics"},
        {menu: "Listings", icon: <BiPurchaseTag />, links: "/Listings"},
        {menu: "Stores", icon: <BsCartDash />, links: "/stores"},
        {menu: "Payouts", icon: <BsCreditCard />, links: "/payments"},
    ]

   
    // Upgrades
    
    // Analytics
    // Listings
    // Stores
    // Payouts
    
    // My purchases
    
    // Tools and services
    
    // Integrations
    // Settings
    const handelActive = () =>{
        setActive(!active)
        mobileCheck(
            !active
        )
    }

    const handelActiveTopNav = () =>{
        setActiveTopNav(!activeTopNav)
    }

    const cardStyle = {
        // opacity: activeTopNav ? 1 : 0,
        // transition: "all 0.3s ease-in",
        display: activeTopNav? "":"none"
    }   
    const cardStyleDropDown = {
        // opacity: activeTopNav ? 0 : 1,
        // transition: "all 0.3s ease-in",
        display: activeTopNav? "none":""
    }      

    return(
        <div className={active? "header": "header-mobil"}>
            
            <nav>

                <div className="nav-top">
                    <div
                        // className={activeTopNav?"nav-top-info":"hide-element"}
                        className={"nav-top-info"}
                        style={cardStyle}>
                            
                        <div 
                        onClick={handelActiveTopNav}
                        className="nav-top-info-container">

                            <span className="nav-top-info-span-photo">
                                <img src={logo} alt="your user Logo" />
                            </span>
                            {active &&
                            <span 
                                className="nav-top-info-span-username-contain">
                                <ul className="nav-top-info-span-username-ul">
                                    <li className="nav-top-info-span-username">
                                        <b>THE HIVE</b>
                                    </li>
                                    <li className="nav-top-info-span-email">
                                        thehiveOffical2022@gmail.com
                                    </li>
                                </ul>
                            </span>}
                            {active &&
                            <span className="nav-top-info-span-icon">
                                <BiCaretDown /> 
                            </span>
                            }
                            
                        </div> 
                        <div className="nav-create-designe">
                            <Link to={"/Muckup"}>
                                <div className="creat-design">
                                    <span>
                                        <BiPen />
                                    </span>
                                    {active && "Create Designe"}
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    <div 
                        // className={activeTopNav?"hide-element":"nav-bottom-info-menu"}>
                        className={"nav-bottom-info-menu"}
                        style={cardStyleDropDown}
                        >
                        <div
                            className={"nav-bottom-info"}
                            onClick={handelActiveTopNav}>
                            
                            <span className="nav-top-info-span-photo">
                                <img src={ logo} alt="your user Logo" />
                            </span>
                            {active &&
                            <span 
                                className="nav-top-info-span-username-contain">
                                <ul className="nav-top-info-span-username-ul">
                                    <li className="nav-top-info-span-username">
                                        <b>THE HIVE</b>
                                    </li>
                                    <li className="nav-top-info-span-email">
                                        thehiveOffical2022@gmail.com
                                    </li>
                                </ul>
                            </span>}
                            {active &&
                            <span className="nav-top-info-span-icon">
                                <BiCaretUp /> 
                            </span>
                            }
                        </div>
                        <div className="nav-bottom-info-menu-main">
                            <ul className="nav-top-info-menu-main-ul">
                                <li className="nav-top-info-menu-main-li">
                                    <Link to={"/User/dashbord"}>
                                        {
                                        active?
                                        "Dashboard":
                                        <MdOutlineSpaceDashboard style={{fontSize: 25}}/>
                                        }
                                    </Link>
                                </li>
                                <li className="nav-top-info-menu-main-li">
                                    <Link to={"/Login&SighnUp"}>
                                        {
                                        active?
                                        "Sighn Out":
                                        <IoExitOutline style={{fontSize: 25}}/>
                                        }
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>

                <div className="nav-body">
                    <span onClick={handelActive} className="nav-arrow">
                        {
                        active ?
                        <FiArrowLeft />: 
                        <FiArrowRight />
                        }
                    </span>
                    <ul className={active?"":"nav-body-ul-mobile"}>
                        {
                            allMenusLinksAndIcons.map((val, key)=>{
                                return(
                                    <li key={key}>
                                       { active?
                                            <Link to={val["links"]}>
                                                <span className="icon-main-menu-icon">
                                                    {val["icon"]}
                                                </span>
                                                <span className="icon-main-menu-info">
                                                    {val["menu"]}
                                                </span>
                                                
                                            </Link>:
                                            <Link to={val["links"]}>

                                                <span className="icon-main-menu-icon">
                                                    {val["icon"]}
                                                </span>
                                                
                                            </Link>
                                        }
                                    </li>
                                )
                            })
                        }
                        <li>
                            { active?
                                <Link to={"/settings"}>
                                    <span className="icon-main-menu-icon">
                                        <FiSettings />
                                    </span>
                                    <span className="icon-main-menu-info">
                                        Settings
                                    </span>
                                    
                                </Link>:
                                <Link to={"/settings"}>

                                    <span className="icon-main-menu-icon">
                                        <FiSettings />
                                    </span>
                                    
                                </Link>
                            }
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default SideMenuBar