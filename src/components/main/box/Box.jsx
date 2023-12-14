import React, {useEffect, useMemo, useState} from "react";
import styles from "./Box.module.scss" 
import { useDispatch, useSelector } from "react-redux";
import {addCard, deleteCard} from "/src/App/reducers/addToCart.js"

export default function Box ({image, name, price, count = 1}) {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1);
    
    return(
        <div className={styles.card}>
            <img src={image} className={styles.img}/>
            <div className={styles.cardInfo}>
                <div className={styles.name}>
                    <h1>{name}</h1>    
                </div> 

                <div className={styles.btn}>
                    <button onClick={ () => {
                        dispatch(addCard({name, price, image, count: amount}));
                    }}>
                        <p>
                            add ++
                        </p>
                    </button>

                    <div className={styles.price}>
                    <p>{price}$</p>
                    </div>
                    
                    <button onClick={() => {
                        dispatch(deleteCard({name, count: amount}));
                    }}>
                        <p>
                            dec --
                        </p>
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

