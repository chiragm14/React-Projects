import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../app/components/todoSlice';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = configureStore({
    reducer:todoReducer

})