import { createSlice } from "@reduxjs/toolkit";


const PizzaCart = createSlice({
    name: "PizzaCart",
    initialState: {
        items: [],
    },
    reducers: {

        addToCart: (state, action) => {
            const { pizzaName, size, crust, toppings } = action.payload;

            const alreadyItem = state.items.find(
                (item) =>
                    item.pizzaName === pizzaName &&
                    item.size?.price === size?.price &&
                    item.crust?.price === crust?.price &&
                    JSON.stringify(item.toppings) === JSON.stringify(toppings)
            );
            if (alreadyItem) {
                alreadyItem.qty += 1;
            } else {
                state.items.push({ ...action.payload, qty: 1 });
            }
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (i) =>
                    !(
                        i.pizzaName === action.payload.pizzaName &&
                        i.size?.price === action.payload.size?.price &&
                        i.crust?.price === action.payload.crust?.price &&
                        JSON.stringify(i.toppings) === JSON.stringify(action.payload.toppings)
                    )
            );
        },

        PizzaCartIncrement: (state, action) => {
            const item = state.items.find(
                (i) =>
                    i.pizzaName === action.payload.pizzaName &&
                    i.size?.price === action.payload.size?.price &&
                    i.crust?.price === action.payload.crust?.price &&
                   JSON.stringify(i.toppings) === JSON.stringify(action.payload.toppings)
            );

            if (item) {
                item.qty += 1;
            }
        },

        PizzaCartDecrement: (state, action) => {
            const index = state.items.findIndex(
                (i) =>
                    i.pizzaName === action.payload.pizzaName &&
                    i.size?.price === action.payload.size?.price &&
                    i.crust?.price === action.payload.crust?.price &&

                    JSON.stringify(i.toppings) === JSON.stringify(action.payload.toppings)
            );

            if (index !== -1) {
                if (state.items[index].qty > 1) {
                    state.items[index].qty -= 1;
                } else {
                    state.items.splice(index, 1);
                }
            }
        },




    },
});


export const { addToCart, removeFromCart, PizzaCartIncrement, PizzaCartDecrement } = PizzaCart.actions
export default PizzaCart.reducer;