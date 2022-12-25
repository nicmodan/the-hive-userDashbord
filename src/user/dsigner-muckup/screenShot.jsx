import React, {useState, useEffect} from "react"
import MainMuckup from "./mainMuckup";
import { useSelector, useDispatch } from "react-redux";
import { getHiveShipingOrders } from "../reducers/address&orders";
// import { useScreenshot } from 'use-react-screenshot'


const ScreenShot = (props) =>{

    const [screenShoot, setScreenShoot] = useState(undefined)

     // REDUX STATE 
     const orders = useSelector(state=>state.hiveShipingOrder)
     const dispatch = useDispatch()


    // const ref = createRef(null)
    // const [image, takeScreenshot] = useScreenshot()
    // const getImage = () => takeScreenshot(ref.current)

    const {preview, view, val, imageToOrder, imageToDesign} = props

    // This ref is connected to the list
    const handelSceenShoot = (image) =>{
        setScreenShoot(image)
    } 

   useEffect(()=>{

        const data = {...orders}
        data[`${val}Muckup`] = screenShoot
        // {storeMuckup: null}
        // data["storeMuckup"][`${val}Muckup`] = screenShoot
        dispatch(getHiveShipingOrders({...orders, ...data}))
        console.log({...orders, ...data})

   }, [screenShoot])

    return(        
        <div
            className="muckup-main" style={{display: view===val?"" :"none"}}>

            <div style={preview==="design"?{display: ""}:{display: "none"}} className="muckup-main-design">

                <div className="muckup-main-img">
                    <div className="muckup-main-img-container">
                        
                        <div className="muckup-div-sample" >
                            {console.log(val)}
                            <MainMuckup 
                                imageToOrder={imageToOrder}
                                imageToDesign={imageToDesign} 
                                screenShoot={handelSceenShoot}
                            />
                        </div>
                        
                    </div>
                </div>
                {/* <div className="muckup-main-edite">

                </div> */}
            </div>
            <div style={preview==="preview"?{display: ""}:{display: "none"}} 
                // className="muckup-main-preview-design"
                className="muckup-main-design"
                >
                    <div className="muckup-main-img">
                        <div className="muckup-main-image-container">
                            <img src={screenShoot} alt="" className="muckup-main-image" />
                        </div>
                    </div>
            </div>

        </div>
            
    )
}

export default ScreenShot