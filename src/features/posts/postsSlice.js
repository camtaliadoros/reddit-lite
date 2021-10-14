import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async (term) => {
        if (term) {
            const response = await fetch('https://www.reddit.com/search.json?q=' + term);
            const json = await response.json();
            console.log(json.data.children);
            return json.data.children;
        } else {
            const response = await fetch('https://www.reddit.com/r/popular.json');
            const json = await response.json();
            console.log(json.data.children);
            return json.data.children;
        }

    }
)


export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        isLoadingPosts: false,
        failedToLoadPosts: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.pending, (state) => {
                state.isLoadingPosts = true;
                state.failedToLoadPosts = false;
            })
            .addCase(loadPosts.rejected, (state) => {
                state.isLoadingPosts = false;
                state.failedToLoadPosts = true;
                state.data = [];
            })
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoadingPosts = false;
                state.failedToLoadPosts = false;
            })
    }
})

export const selectPosts = (state) => {
    return state.posts.data;
}
export const isLoadingPosts = state => {
    return state.posts.isLoadingPosts;
}

export default postsSlice.reducer;