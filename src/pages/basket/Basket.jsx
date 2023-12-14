import React, { useState,useEffect } from "react"
import styles from "./Basket.module.scss"
import ShopBox from "/src/pages/basket/shopBox/ShopBox.jsx"

import { useSelector, useDispatch} from "react-redux"
import VideoBg from "/src/components/main/videoBg/VideoBg.jsx"
import {deleteAllCards } from "/src/App/reducers/addToCart.js"

const Basket = () => {
    const dispatch = useDispatch();
    const [sumProducts, setSumProducts] = useState(0);
    const [local, setLocal] = useState([]);
    const allCards = useSelector((state) => state.cards);

    useEffect(() => {
        setSumProducts(allCards.reduce((total, card) => total + (card.count * card.price), 0).toFixed(2));
    }, [allCards]);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(allCards));
        setLocal(JSON.parse(localStorage.getItem("cartItems")) || []);
    }, [allCards]);
    

    return(
        <section>
            <div className={styles.block}>
                <div className={styles.video}>
                    <VideoBg/>
                </div>

                <div className={styles.listBody}>
                    {local.map( product => (
                        <ShopBox key={product.id} name={product.name} price={product.price} image={product.image}/>
                    ))}
                </div>
                <div className={styles.sumAndDel}>
                   
                    <div className={styles.deleteAll}>
                        <button onClick={() => {dispatch(deleteAllCards())}}>
                            <p>Delete ALL</p>
                        </button>
                    </div>
                    <div className={styles.sum}>
                            <p>{sumProducts}</p> 
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Basket