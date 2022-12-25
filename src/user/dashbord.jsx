import React from "react"
import "./user.css"
// import { Col } from "react-bootstrap"
import banner from "../Resources/thehiveBanner.png"
import { Link } from "react-router-dom"
import {BiPurchaseTag, BiDollar, BiWalletAlt} from "react-icons/bi"

// IMPORTING SOCIAL IMAGES
import discord from "../Resources/discord.png"
import instagram from "../Resources/instagram.png"
import linktree from "../Resources/linktree.png"
import onlyfans from "../Resources/onlyfans.png"
import twitch from "../Resources/twitch.png"
import youtube from "../Resources/youtube.png"

const sellOnSocials = [
    {
        social: "discord",
        link: "https://discord.com/login",
        img: discord
    },
    {
        social: "instagram",
        link: "https://www.instagram.com/accounts/login/",
        img: instagram
    },
    {
        social: "onlyfans",
        link: "https://onlyfans.com/",
        img: onlyfans
    },
    {
        social: "twitch",
        link: "https://www.twitch.com/login",
        img: twitch
    },
    {
        social: "youtube",
        link: "https://www.youtube.com/account",
        img: youtube
    },
    {
        social: "linktree",
        link: "https://linktr.ee/login",
        img: linktree
    },
]


const UserHome = (props) =>{
    const {mobileCheck} = props

    return(
      <div className={mobileCheck? "user-dashbord": "user-dashbord-mobile"}>
            <div className="user-dashbord-ads-img-link">
                <Link to={"/"}>
                    <img className="user-dashbord-ads-img" src={banner} alt={"user Banner ads img"} />
                </Link>
            </div>
            <div className="user-dashbord-analysis-overview">
                <span className="user-dashbord-analysis-overview-info">
                    <p>Analytics overview</p>
                </span>

                <div className="user-dashbord-analysis-overview-contain">
                    <div className="user-dashbord-analysis-overview-typse">
                        <span className="user-dashbord-analysis-overview-img">
                            <BiPurchaseTag />
                        </span>
                        <span className="user-dashbord-analysis-overview-count">
                            <h3>0</h3>
                            <p>Products orderd</p>
                        </span>
                    </div>
                    <div className="user-dashbord-analysis-overview-typse">
                        <span className="user-dashbord-analysis-overview-img">
                            {/* <BiDollar /> */}
                            ₦
                        </span>
                        <span className="user-dashbord-analysis-overview-count">
                            <h4>₦6,000,000</h4>
                            <p>Profit</p>
                        </span>
                    </div>
                    <div className="user-dashbord-analysis-overview-typse">
                        <span className="user-dashbord-analysis-overview-img">
                            <BiWalletAlt />
                        </span>
                        <span className="user-dashbord-analysis-overview-count">
                            <h4>₦6,000,000</h4>
                            <p>To be paid</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="user-dashbord-Sell-on-social">
                <span className="user-dashbord-Sell-on-social-info">
                    <p>Sell on social</p>
                </span>

                <div className="user-dashbord-Sell-on-social-info-contain">
                    {sellOnSocials.map((val, key)=>(
                        <a key={key} href={val["link"]}>
                            <div className="sell-online-container">
                                <img src={val["img"]} alt={val["social"]} />
                            </div>
                        </a>
                    ))
                    }
                </div>
            </div>
      </div>
    )
}

export default UserHome