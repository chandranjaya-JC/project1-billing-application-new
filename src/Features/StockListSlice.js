import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


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
            {
                itemName: 'potato',
                price: 45,
                remainingQuantity: 18
            },
            {
                itemName: 'cabbage',
                price: 33,
                remainingQuantity: 52
            },{
                itemName: 'strawberry',
                price: 200,
                remainingQuantity: 3
            },{
                itemName: 'onion',
                price: 40,
                remainingQuantity: 95
            },{
                itemName: 'capsicum',
                price: 80,
                remainingQuantity: 5
            },{
                itemName: 'beans',
                price: 150,
                remainingQuantity: 5
            },{
                itemName: 'mango',
                price: 120,
                remainingQuantity: 14
            }
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



