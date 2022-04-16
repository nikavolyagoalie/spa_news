import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../store/slices/userSlice';
import newsReducer from '../store/slices/newsSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        news: newsReducer
    }
});