import { createSlice } from "@reduxjs/toolkit";

const shopCart = createSlice({
    name: 'cards',
    initialState: [],
    reducers: {
        addCard: (state, action) => {
            const existingCard = state.find(card => card.name === action.payload.name);
            if(existingCard) {  
                existingCard.count += action.payload.count;
            } else {
                state.push(action.payload);
            }
        },
        deleteCard: (state, action) => {
            const existingCard = state.find(card => card.name === action.payload.name);
            if(existingCard.count > 1) {  
                existingCard.count -= action.payload.count;
            } else {
                return state.filter(card => card.name !== action.payload.name);
            }
        },
        deleteAllCards: (state) => {
            return [];
        },
        
            
    }
});

export const {addCard, deleteCard, deleteAllCards} = shopCart.actions
export default shopCart.reducer