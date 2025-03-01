import "./followcard.css"
import { useState } from "react";



const FollowTwitter = ({ username, name })=>{

const [ isFollowin, setIsFollowin] = useState(false)

const text= isFollowin ? "Siguiendo" : "Seguir";

const buttonClassName =  isFollowin


const imageSrc=`https://unavatar.io/${username}`;



const handleClick =()=>{
    setIsFollowin(!isFollowin)
}

    return(
        <article className="cont-Followcard">
        <header className="follow-card-header">
            <img 
            className="follow-card-avatar"
             src = {imageSrc}
             alt="foto de perfil" />
            <div className="follow-card-info">
                 <strong>{name}</strong>
                <span className="follow-card-infoUserName">@{username}</span>
            </div>
        </header>
        <aside>
            <button className="follow-card-button" onClick={handleClick}>{text}</button>
        </aside>
        </article>
    )
}

export {FollowTwitter}