import React, {useState} from "react";
import SideMenuBar from "./SideMenuBar";
import "./user.css"
import { AiOutlinePlus } from "react-icons/ai";
import { BsTextareaT } from "react-icons/bs";
import RenderMuckup from "./dsigner-muckup/muckup";

// REDUX STORE SETUP
import { updateUserStore } from "../Service/user-Store";
import {
    useDispatch, 
    useSelector} from "react-redux"

const Muckup = () =>{

    const dispatch = useDispatch()
    const state = useSelector(state => state.user)

    const [storeImages, setStoreImages] = useState(null)
    const [storeImageName, setStoreImageName] = useState("Add Image") 
    const [designeText, setDesigneText] = useState(false)
    const [designeColor, setDesigneColor] = useState("white")


    const handelClickColor = (val) =>{
        setDesigneColor(val)

        const data = {...state}
        const setColor = {
            designeColor
        }
        dispatch( updateUserStore({...data, ...setColor}) )
    }

    const handelChangeImg = (e) =>{
        // console.log(e.target.files);
        setStoreImages(URL.createObjectURL(e.target.files[0]));
        setStoreImageName(e.target.files[0].name)
        setDesigneText(true)
        
        const data = {...state}
        const img_obj = {
            uploadImg: e.target.files[0],
            designeText: false
        }
        dispatch( updateUserStore({...data, ...img_obj}) )
    }

    const handelClickText = () =>{

        setDesigneText(true)
        const data = {...state}
        const containTextCondition = {
            designeText: true
        }
        dispatch( updateUserStore({...data, ...containTextCondition}) )
    }

    return(
        <div className="container-muckup">
            <div className="muckup-tools">
                <div className="container-tools-edit upload-image-text">
                    <h4 className="muckup-title">
                        Design your product
                    </h4>
                    <p className="muckup-subtitle">
                        Max file size of 50MB
                    </p>
                    <div className="container-tools-edit-buttons">
                        <div className="upload-img-text">
                            <span className="UploadButton">

                                {/* <input type="file" accept="image/*" id="fileElem" data-cy="addImageLayerButton" multiple="" style={{ opacity: 0 }} /> */}
                                <span className="position-span">
                                    <button className="button layerButton addImageLayerButton" type="button" fdprocessedid="puwpw">
                                        {/* <input className="position-input" type="file" accept="image/*" id="fileElem" data-cy="addImageLayerButton" multiple="" style={{ opacity: 0 }} /> */}

                                        <span>
                                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                <path d="M16 5.42468V26.7581" stroke="#08080D" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                                <path d="M5.33203 16.0258H26.6654" stroke="#08080D" strokeLinecap="round" strokeLinejoin="round">
                                                </path>
                                            </svg>
                                        </span>
                                        <span className="addImageButton">{storeImageName}</span>
                                    </button>
                                </span>
                                <input 
                                    className="position-input" 
                                    type="file" 
                                    accept="image/*" 
                                    id="fileElem" 
                                    data-cy="addImageLayerButton" 
                                    multiple="" style={{ opacity: 0 }} 
                                    onChange={handelChangeImg}
                                />
                                {/* </input> */}
                                
                            </span>

                        </div>
                        <div className="upload-img-text">
                            <div onClick={handelClickText} className="upload-img-text-contain">
                                <span className="addImageText">
                                    <BsTextareaT fontSize={23}/>
                                </span>
                                <span className="addImageText">
                                    Add Text.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-tools-edit">
                    <h4 className="muckup-title">
                        Choose product colors
                    </h4>
                    <p className="muckup-subtitle">
                        Select multiple background colors to offer
                    </p>
                    <div className="colorPickerSwatch">
                            <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Black" data-cy="productColor-Black" fdprocessedid="2gz8sz" onClick={()=>handelClickColor("rgb(34, 34, 34)")} style={{backgroundColor: "rgb(34, 34, 34)"}}>
                            </div>
                            <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Classic Red" data-cy="productColor-Classic Red" fdprocessedid="nqbvn" onClick={()=>handelClickColor("rgb(197, 0, 0)")} style={{backgroundColor: "rgb(197, 0, 0)"}} >
                            </div>
                            <div role="button" tabIndex="0" className="productColor blackCheckmark" title="Lemon Yellow " data-cy="productColor-Lemon Yellow " fdprocessedid="kjvz2d" onClick={()=>handelClickColor("rgb(252, 245, 139)")} style={{backgroundColor: "rgb(252, 245, 139)" }}>
                            </div>
                            <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="New Navy" data-cy="productColor-New Navy" fdprocessedid="s71f1n" onClick={()=>handelClickColor("rgb(12, 26, 44)")} style= {{ backgroundColor: "rgb(12, 26, 44)" }} >
                            </div>
                            <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Deep Royal" data-cy="productColor-Deep Royal" fdprocessedid="ahxp5" onClick={()=>handelClickColor("rgb(34, 72, 143)")} style={{backgroundColor: "rgb(34, 72, 143)"}}>
                            </div>
                            <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Purple" data-cy="productColor-Purple" fdprocessedid="rhyxuf" onClick={()=>handelClickColor("rgb(82, 56, 133)")} style={{backgroundColor: "rgb(82, 56, 133)"}}>
                            </div>
                            <div role="button" tabIndex="0" className="productColor active blackCheckmark" title="White" data-cy="productColor-White" fdprocessedid="prz92f" onClick={()=>handelClickColor("rgb(255, 255, 255)")} style={{backgroundColor: "rgb(255, 255, 255)"}}>
                            </div>
                            <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Heathered Charcoal " data-cy="productColor-Heathered Charcoal " fdprocessedid="0dhn6" onClick={()=>handelClickColor("rgb(65, 60, 66)")} style={{backgroundColor: "rgb(65, 60, 66)" }} >
                            </div>
                            <div role="button" tabIndex="0" className="productColor blackCheckmark" title="Light Heather Grey " data-cy="productColor-Light Heather Grey " fdprocessedid="ayz2f7" onClick={()=>handelClickColor("rgb(209, 209, 209)")} style={{backgroundColor: "rgb(209, 209, 209)"}} >
                            </div>
                            <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Heathered Royal " data-cy="productColor-Heathered Royal " fdprocessedid="eb44k2" onClick={()=>handelClickColor("rgb(100, 134, 208)")} style={{backgroundColorr: "rgb(100, 134, 208)"}}>
                            </div>
                            <div role="button" tabIndex="0" className="productColor whiteCheckmark" title="Grey" data-cy="productColor-Grey" fdprocessedid="5n0b4if" onClick={()=>handelClickColor("rgb(143, 150, 138)")} style={{backgroundColor: "rgb(143, 150, 138)"}}>
                            </div>
                    </div>
                </div>
                {/* <div className="container-tools-edit set-user-price">
                    <div class="formGroup">
                        <label for="price" class="title required">Set your pricing</label>
                        <div class="subtitle">Enter your desired retail price for fans from US and Europe.</div>
                        <div class="button1 b2" id="button-region">
                            <input type="checkbox" class="checkbox" />
                            <div class="knobs">
                                <span>US</span>
                            </div>
                            <div class="layer">
                            </div>
                        </div>
                        <div class="priceRegions">
                            <div class="formGroup">
                                <div class="regionTitle subtitle">
                                    Price for products fulfilled from the US
                                </div>
                                <div>
                                    <div class="sidePaneRow noMarginBotton">
                                        <div class="priceContainer">
                                            <span class="priceCurrency ">$</span>
                                            <input type="text" id="" class="priceInput form__textfield " data-cy="priceInput-USA" value="25.99" spellcheck="false" data-ms-editor="true" />
                                        </div>
                                        <div class="profitDisplay">$6.64 Profit/Sale</div>
                                    </div>
                                    <div class="sidePaneRow creatorsMessage subtitle italic">
                                        Tip: Most Creators price this product at:
                                        <div class="creatorsTargetPricing">$26.99</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div>

                        </div>

                    </div>
                </div> */}
                {/* <div className="container-tools-edit"></div> */}
            </div>
            <div className="muckup-engine">
                <div className="muckup-eng-img">
                   {
                   designeText
                    ?
                    <RenderMuckup />
                    :
                    <div className="muckup-body-container">
                        <h1>
                            please upload an image
                        </h1>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Muckup