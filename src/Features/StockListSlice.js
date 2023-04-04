import { createSlice } from "@reduxjs/toolkit";

export const StockListSlice = createSlice({
    name: 'StockList',
    initialState: {
        Stocks: [
            {
                itemName: 'apple',
                price: 100,
                remainingQuantity: 30
            },
            {
                itemName: 'orange',
                price: 60,
                remainingQuantity: 15
            },
            {
                itemName: 'grape',
                price: 50,
                remainingQuantity: 13
            },
            {
                itemName: 'milk',
                price: 40,
                remainingQuantity: 20
            },
            {
                itemName: 'tomato',
                price: 20,
                remainingQuantity: 25
            },
        ]
    },
    reducers: {
        AddNewStock: (state, action) => {
            state.Stocks = [...state.Stocks, action.payload]
            // console.log(state.Stocks)
        }
    }
})


export const { AddNewStock } = StockListSlice.actions

export default StockListSlice.reducer



