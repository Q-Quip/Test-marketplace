import React, {useState, useEffect} from "react";
import styles from "./ShopBox.module.scss"
import { useDispatch, useSelector} from "react-redux";
import {addCard, deleteCard} from "/src/App/reducers/addToCart.js"

export default function ShopBox({image, name, price}) {

    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cards);
    const count = cartState.find((card) => card.name === name);
    
    const [amount, setAmount] = useState(1);

    return(
        <div className={styles.card}>
            <img src={image} className={styles.img}/>
            <div className={styles.infoCard}>
                <div className={styles.cardName}>
                    <h1>{name}</h1> 
                </div>
                <div className={styles.price}>
                    <p>{(price * count.count).toFixed(2)}</p>
                </div>
                <div className={styles.btn}>
                    <button onClick={ () => dispatch(addCard({name, price, image, count:amount}))}>
                        <p>add ++</p>
                    </button>

                    <span className={styles.counter}>
                        {count.count}
                    </span>

                    <button onClick={() => dispatch(deleteCard({name, count:amount}))}>
                        <p>dec --</p>
                    </button>
                </div>
                <div className={styles.amount}>
                    <input value={amount} onChange={(e) => {
                        const newValue = parseInt(e.target.value, 10);
                        setAmount(isNaN(newValue) ? '' : newValue);}} />
                </div>
            </div>
        </div>
    )
}