import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "/src/App/reducers/countCardsData.js"
import shopCart from "/src/App/reducers/addToCart.js"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        cards: shopCart,
    }
});

export default store;
