import React, {useState, useCallback, useRef} from "react"
import { useSelector, useDispatch } from "react-redux";

import ScreenShot from "./screenShot";

import "../muckup.css"


import front from "../../Resources/front/front.png"
import back from "../Resouces/back/back.png"


import logo from "../Resouces/Logo.jpg"

import 'html5-device-mockups/dist/device-mockups.min.css';
// import { IPad } from 'react-device-mockups';

// import moqq from "moqq";

const Muckup = (props) =>{

    // REDUX STATE 
    const orders = useSelector(state=>state.hiveShipingOrder)
    const {images} = orders
    // const dispatch = useDispatch()
    console.log(images)
    // This ref is connected to the list

    const [view, setView] = useState("front")
    const [preview, setPreiview] = useState("design")

   
    const samplePreview = {
        image_links: {
            front: front,
            back: back
        }
    }
    
    // setInterval(()=>{
    //     if(preview==="design"){
    //         screenShotRef.current.getImage()
    //     }
    // }, 20000)
    
    return(
    <div className="muckup-body-container">
        <div className="muckup-body-main">

            {/* VIEW POINT */}

            <div className="muckup-img-veiw">
                <select 
                    value={view} 
                    onChange={e=>{setView(e.target.value)}}
                    className="selection-muckup">
                    {
                        Object.keys(samplePreview["image_links"]).map((val, idx)=>{
                            return(
                                <option key={idx} value={val}>{val}</option>
                            )
                        })
                    }
                </select>
            </div>

            {/* MUCKUP GENERATOR */}

            {
                Object.keys(samplePreview["image_links"]).map((val, key)=>(
                    
                        images && 
                        <ScreenShot 
                        key={key}
                        preview={preview} 
                        view={view}
                        val={val}
                        imageToOrder={samplePreview["image_links"][val]} 
                        // imageToDesign={logo}
                        imageToDesign={URL.createObjectURL(images)}
                        />
                   
                ))
                
            }
           
            {/* PREVIEW POINT */}

            <div className="muckup-img-preview">
                <select 
                    value={preview} 
                    onChange={e=>setPreiview(e.target.value)}
                    className="selection-muckup">
                        {
                            ["design", "preview"].map((val, idx)=>{
                                return(
                                    <option key={idx} value={val}>{val}</option>
                                )
                            })
                        }
                </select>
            </div>
            
        </div>

    </div>
    )
}

export default Muckup