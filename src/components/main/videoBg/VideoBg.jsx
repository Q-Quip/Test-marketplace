import React from "react";
import styles from "./VideoBg.module.scss"
import bgVideo from "/public/img/main/bg.mp4"

export default function VideoBg() {
    return(
        <>
            <video src={bgVideo} autoPlay muted loop className={styles.video} >
                Sorry, your browser doesn't support videos.
            </video>
        </>
    ) 
} 