import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const listSlice = createSlice({
    name: 'TotalList',
    initialState: {
        list: [
            [
                100,"Jaya Chandran", "3/26/2023", "1:39:57 AM",
                { "itemName": "orange", "quantity": "2", "price": "120" },
                { "itemName": "milk", "quantity": "2", "price": "80" },
                { "itemName": "apple", "quantity": "1", "price": "90" },
                { "itemName": "carrot", "quantity": "1", "price": "30" }
            ],
            [
                100,"Jaya Chandran", "3/26/2023", "1:39:57 AM",
                { "itemName": "orange", "quantity": "2", "price": "120" },
                { "itemName": "milk", "quantity": "2", "price": "80" },
                { "itemName": "apple", "quantity": "1", "price": "90" },
                { "itemName": "carrot", "quantity": "1", "price": "30" }
            ],
            [
                100,"Jaya Chandran", "3/26/2023", "1:39:57 AM",
                { "itemName": "orange", "quantity": "2", "price": "120" },
                { "itemName": "milk", "quantity": "2", "price": "80" },
                { "itemName": "apple", "quantity": "1", "price": "90" },
                { "itemName": "carrot", "quantity": "1", "price": "30" }
            ],
            [
                100,"Jaya Chandran", "3/26/2023", "1:39:57 AM",
                { "itemName": "orange", "quantity": "2", "price": "120" },
                { "itemName": "milk", "quantity": "2", "price": "80" },
                { "itemName": "apple", "quantity": "1", "price": "90" },
                { "itemName": "carrot", "quantity": "1", "price": "30" }
            ],
        ],
        
    },
    reducers: {
        AddNewList: (state, action) => {
            state.list = [action.payload,...state.list]
            // const payload = action.payload
            // axios.post('http://localhost:3001/data', state.list,{
            //     headers: {
            //         'Content-Type': 'application/json'
            //       }
            // })
            // .then(function(response) {
            //     console.log(response);
            //   }).catch(function(error) {
            //     console.log(error);
            //   })
            // // state.list = [action.payload,...state.list]
            // console.log(payload)
        }
    }
})

export const { AddNewList } = listSlice.actions

export default listSlice.reducer



// Stocks: [
//     {
//         itemName: 'apple',
//         price: 100,
//         remainingQuantity: 30
//     },
//     {
//         itemName: 'orange',
//         price: 60,
//         remainingQuantity: 15
//     },
//     {
//         itemName: 'grape',
//         price: 50,
//         remainingQuantity: 13
//     },
//     {
//         itemName: 'milk',
//         price: 40,
//         remainingQuantity: 20
//     },
//     {
//         itemName: 'tomato',
//         price: 20,
//         remainingQuantity: 25
//     },
// ]

// [
//     100,"Jaya Chandran", "3/26/2023", "1:39:57 AM",
//     { itemName: 'apple', quantity: '1', price: '90' },
//     { itemName: 'orange', quantity: '2', price: '120' },
//     { itemName: 'milk', quantity: '2', price: '80' },
//     { itemName: 'carrot', quantity: '1', price: '30' }
// ],
// [
//     200,"Swathi", "3/25/2023", "1:39:57 AM",
//     { itemName: 'apple', quantity: '1', price: '90' },
//     { itemName: 'orange', quantity: '2', price: '120' },
//     { itemName: 'milk', quantity: '2', price: '80' },
//     { itemName: 'carrot', quantity: '1', price: '30' }
// ],
// [
//     300,"Jaya Chandran", "3/26/2023", "1:39:57 AM",
//     { itemName: 'apple', quantity: '1', price: '90' },
//     { itemName: 'orange', quantity: '2', price: '120' },
//     { itemName: 'milk', quantity: '2', price: '80' },
//     { itemName: 'carrot', quantity: '1', price: '30' }
// ],
// [
//     400,"Jaya Chandran", "3/26/2023", "1:39:57 AM",
//     { itemName: 'apple', quantity: '1', price: '90' },
//     { itemName: 'orange', quantity: '2', price: '120' },
//     { itemName: 'milk', quantity: '2', price: '80' },
//     { itemName: 'carrot', quantity: '1', price: '30' }
// ],
// [
//     500,"Jaya Chandran", "3/26/2023", "1:39:57 AM",
//     { itemName: 'apple', quantity: '1', price: '90' },
//     { itemName: 'orange', quantity: '2', price: '120' },
//     { itemName: 'milk', quantity: '2', price: '80' },
//     { itemName: 'carrot', quantity: '1', price: '30' }
// ],
// [
//     600,"Jaya Chandran", "3/26/2023", "1:39:57 AM",
//     { itemName: 'apple', quantity: '1', price: '90' },
//     { itemName: 'orange', quantity: '2', price: '120' },
//     { itemName: 'milk', quantity: '2', price: '80' },
//     { itemName: 'carrot', quantity: '1', price: '30' }
// ]

// extraReducers: (builder)=>{
//     builder.addCase(fetchListData.pending,(state) => {
//         state.loading = true
//     })
//     builder.addCase(fetchListData.fulfilled, (state,action) => {
//         state.loading = false
//         state.list = action.payload
//         state.error = ""
//     })
//     builder.addCase(fetchListData.rejected,(state,action)=>{
//         state.loading = false
//         state.list = []
//         state.error = action.error.message
//     })
// },


// export const fetchListData = createAsyncThunk('list/fetchListData', () => {
//     return axios.get('http://localhost:3001/data')
//     .then((response) => response.data)
// })