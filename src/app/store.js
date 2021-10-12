import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'
import categoriesReducer from '../features/categories/categoriesSlice';
import commentsReducer from '../features/comments/commentsSlice';

export default configureStore({
    reducer: {
        posts: postsReducer,
        categories: categoriesReducer,
        comments: commentsReducer
    }
})