import { configureStore } from "@reduxjs/toolkit";
import data from '../Store/data'

export const store =configureStore({
    reducer:{
        allData:data
    }
})