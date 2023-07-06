import React from "react";
import "./CaptionMover.css"


function CaptionMover(props){
    return(
        <div className="direction">
            <a className="input">{props.input}:</a>
            <button 
                name="top" 
                onClick={(event)=>props.handleDirClick(props.id,-1,event)} 
                className="direction-button"
            >Up</button>
            <button 
                name="left"
                onClick={(event)=>props.handleDirClick(props.id,1,event)} 
                className="direction-button"
            >Right</button>
            <button 
                name="top" 
                onClick={(event)=>props.handleDirClick(props.id,1,event)} 
                className="direction-button"
            >Down</button>
            <button 
                name="left"
                onClick={(event)=>props.handleDirClick(props.id,-1,event)} 
                className="direction-button"
            >Left</button>
        </div>
    )
}

export default CaptionMover