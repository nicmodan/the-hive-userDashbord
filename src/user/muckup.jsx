import React from "react";
import SideMenuBar from "./SideMenuBar";
import "./user.css"

const Muckup = () =>{
    return(
        <div className="container-muckup">
            <div className="muckup-tools">
                <div className="container-tools-edit upload-image-text">
                    <h4>
                        Design your product
                    </h4>
                    <p>
                        Max file size of 50MB
                    </p>
                    <div className="container-tools-edit-buttons">
                        
                    </div>
                </div>
                <div className="container-tools-edit"></div>
                <div className="container-tools-edit"></div>
                <div className="container-tools-edit"></div>
            </div>
            <div className="muckup-engine">
                
            </div>
        </div>
    )
}

export default Muckup