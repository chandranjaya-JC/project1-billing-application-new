import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
    name: 'TotalList',
    initialState: {
        list: [
            [
                "Jaya Chandran", "3/26/2023", "1:39:57 AM",
                { itemName: 'apple', quantity: '1', price: '90' },
                { itemName: 'orange', quantity: '2', price: '120' },
                { itemName: 'milk', quantity: '2', price: '80' },
                { itemName: 'carrot', quantity: '1', price: '30' }
            ],
            [
                "Swathi", "3/25/2023", "1:39:57 AM",
                { itemName: 'apple', quantity: '1', price: '90' },
                { itemName: 'orange', quantity: '2', price: '120' },
                { itemName: 'milk', quantity: '2', price: '80' },
                { itemName: 'carrot', quantity: '1', price: '30' }
            ],
            [
                "Jaya Chandran", "3/26/2023", "1:39:57 AM",
                { itemName: 'apple', quantity: '1', price: '90' },
                { itemName: 'orange', quantity: '2', price: '120' },
                { itemName: 'milk', quantity: '2', price: '80' },
                { itemName: 'carrot', quantity: '1', price: '30' }
            ],
            [
                "Jaya Chandran", "3/26/2023", "1:39:57 AM",
                { itemName: 'apple', quantity: '1', price: '90' },
                { itemName: 'orange', quantity: '2', price: '120' },
                { itemName: 'milk', quantity: '2', price: '80' },
                { itemName: 'carrot', quantity: '1', price: '30' }
            ],
            [
                "Jaya Chandran", "3/26/2023", "1:39:57 AM",
                { itemName: 'apple', quantity: '1', price: '90' },
                { itemName: 'orange', quantity: '2', price: '120' },
                { itemName: 'milk', quantity: '2', price: '80' },
                { itemName: 'carrot', quantity: '1', price: '30' }
            ],
            [
                "Jaya Chandran", "3/26/2023", "1:39:57 AM",
                { itemName: 'apple', quantity: '1', price: '90' },
                { itemName: 'orange', quantity: '2', price: '120' },
                { itemName: 'milk', quantity: '2', price: '80' },
                { itemName: 'carrot', quantity: '1', price: '30' }
            ]
        ],
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
        AddNewList: (state, action) => {
            state.list = [...state.list, action.payload]
            // console.log(state.list)
        }
    }
})

export const { AddNewList } = listSlice.actions

export default listSlice.reducer

