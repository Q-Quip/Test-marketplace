import React, { useEffect, useState } from "react"
import styles from "./Header.module.scss"
import {Link} from "react-router-dom"
import shopCart from "/public/img/header/shopBasket.svg"
import { useSelector } from "react-redux"
import { FaBasketShopping } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";



const Header = () => {
    const [AllProducts, setAllProducts] = useState(0);
    const cards = useSelector(state =>  state.cards);
    useEffect(() => {
        setAllProducts(cards.reduce((total, card) => total + card.count, 0));
    }, [cards]);

    return(
        <header className={styles.head}>
            <nav className={styles.bar}>
                <ul className={styles.navBar}>
                    <li className={styles.home}>
                        <Link to='/'>
                            <FaHome size={50}/>
                        </Link>  
                    </li>
                    <li>
                        <Link to="/basket" >
                            <div className={styles.shopCart}>
                                <FaBasketShopping size={50}/> 
                                <p>{AllProducts}</p>
                            </div>
                        </Link>
                    </li>
                </ul>   
            </nav>
        </header>
    )
}
export default Header;