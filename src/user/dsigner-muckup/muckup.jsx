import React, {useState, useCallback, useRef} from "react"

import ScreenShot from "./screenShot";

import "./muckup.css"


import front from "../../Resources/front/front.png"
import back from "../../Resources/back/back.png"
// import front from "../../Resources"


import logo from "../../Resources/Logo.png"

// REDUX SETUP
// import { updateUserStore } from "../../Service/user-Store";
import {
    // useDispatch, 
    useSelector} from "react-redux"



const RenderMuckup = (props) =>{

    // REDUX STATE 
    // const dispatch = useDispatch()
    const state = useSelector(state => state.user)
    
    const {uploadImg, designeText} = state
    
    // console.log(uploadImg)
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
    
    return (
    // designeText &&
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
                
                        <ScreenShot 
                        key={key}
                        preview={preview} 
                        view={view}
                        val={val}
                        imageToOrder={samplePreview["image_links"][val]} 
                        // imageToDesign={logo}
                        imageToDesign={
                            uploadImg? 
                            URL.createObjectURL(uploadImg)
                            :""
                        }
                        designeText={designeText}
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
    // }

    // {
    // !designeText &&
    // <div className="muckup-body-container">
    //     <h1>
    //         please upload an image
    //     </h1>
    // </div>
    // }
    )
    
}

export default RenderMuckup