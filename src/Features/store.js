import { configureStore } from "@reduxjs/toolkit";
import TotalListReducer from './ListSlice';
import StockListReducer from './StockListSlice'


export default configureStore({
    reducer: {
        TotalList : TotalListReducer,
        StockList : StockListReducer
    }
})