import React from "react"
import { useState, useEffect } from "react"
import "./Meme.css"
import CaptionMover from "./CaptionMover"

function Meme(){
    const [meme, setMemes] = useState(null)
    const [memeUrl, setMemeUrl] = useState(null)
    const [topStyles, setTopStyles] = useState({
        top:0,
        left: 50
    })
    const [botStyles, setBotStyles] = useState({
        top:100,
        left: 50
    })
    const setters = [setTopStyles,setBotStyles]

    const [memeText, setMemeText] = useState({
        topText: "",
        botText:""
    })

    function handleDirClick(id,dir,event){
        const key = event.target.name 
            setters[id](prevStyles => {
                if (key==="top"){
                    return ({
                        ...prevStyles,
                        [key]:prevStyles.top + dir*10
                    })
                }
                else if(key==="left"){
                    return ({
                        ...prevStyles,
                        [key]:prevStyles.left + dir*10
                    })
                }
                else{
                    console.error("error")
                }
            })
    }

    function getMemeImage(){
        if (meme){
            const randomIndex = Math.floor(Math.random() * 100)
            setMemeUrl(meme.data.memes[randomIndex].url)
        }
    }
    
    function handleChange(e){
        const {name,value} = e.target
        e.preventDefault()
        setMemeText(prevText =>({
            ...prevText,
            [name]:value
        }))
    }
    
    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
          .then(response => response.json())
          .then(json => {
            setMemes(json)
            setMemeUrl(json.data.memes[Math.floor(Math.random() * 100)].url)
          })
          .catch(error => console.error(error))
    }, [])

    return(
        <main>
            <div className="form">
                <input 
                    onChange={handleChange} 
                    type="text" className="form--input" 
                    placeholder="Top Text"
                    name="topText"
                    value={memeText.topText}
                />
          
                <input 
                    onChange={handleChange} 
                    type="text" className="form--input" 
                    placeholder="Bottom Text"
                    name="botText"
                    value={memeText.botText}
                />
                <button 
                    className="form--button"
                    onClick = {getMemeImage}
                >
                        Get a new meme format 💯
                </button>
            </div>
            <div className="meme">
                {meme && <img className="meme-image" src={memeUrl}/>}
                <h2 style = {{top:`${topStyles.top}px`,left:`${topStyles.left}px`}} className="meme--top-text">{memeText.topText}</h2>
                <h2 style = {{top:`${botStyles.top}px`,left:`${botStyles.left}px`}} className="meme--bot-text">{memeText.botText}</h2>
            </div>
            <div>   
                <CaptionMover id={0} input="Top Text" handleDirClick={handleDirClick}/>
                <CaptionMover id={1} input="Bot Text" handleDirClick={handleDirClick}/>
            </div>
        </main>
    )
}

export default Meme