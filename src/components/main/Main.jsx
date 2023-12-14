import React, { useEffect } from "react";
import styles from "./Main.module.scss";
import ItemList from "./items/Items.jsx";
import VideoBg from "./videoBg/VideoBg.jsx";


const Main = () => {
    
    return(
        <main>
            <section className={styles.block}>
                <div className={styles.video}>
                    <VideoBg/>
                </div>
                <div className={styles.list}>
                    <ItemList />    
                </div>   
            </section>    
        </main>
    )
}

export default Main;