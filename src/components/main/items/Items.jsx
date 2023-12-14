import React, {useEffect, useState} from "react";
import styles from "./Items.module.scss"
import Box from "/src/components/main/box/Box.jsx"
import { useSelector } from "react-redux";


const ItemList = () => {
    const [products, setProducts] = useState([]); 
    useEffect(() => {
        const popductsApi = async () => {
            try {
                const response = await fetch("https://test-frontend.dev.int.perx.ru/api/goods/");
                if (!response.ok) {
                    throw new Error("propblems with get api");
                }
                const data = await response.json();
                setProducts(data);
            } catch(error) {
                console.error(" error: ", error)
            }
        };

        popductsApi();
    }, [])

    
    return(
        <div className={styles.listBody}>
            {products.map( product => (
                <Box key={product.id} name={product.name} price={product.price} image={`https://test-frontend.dev.int.perx.ru${product.image}`} />
            ))}
        </div>
    )
} 

export default ItemList;