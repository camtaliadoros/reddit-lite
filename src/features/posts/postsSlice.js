import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async () => {
        const response = await fetch ('https://www.reddit.com/r/popular.json/');
        const json = await response.json();
        return json;
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [
            {
                title: 'Post Title',
                category: 'SubReddit',
                time: '6 hours',
                body: 'My parents got bitched out last week. The neighbours dropped in unexpectedly. My parents and the neighbours had good time, talking about their kids, their pets, etc. But when we next saw them, those same people literally bitched us out for being ‘disrespectful’ and ‘not hospitable’, because my parents didn’t offer food. My parents were left shocked at this, because they didn’t really understand they absolutely had to.',
                author: 'Username',
                media: '',
                id: 1
            },
            {
                id: 2,
                title: 'Post Title 2',
                category: 'SubReddit 2',
                time: '12 hours',
                body: '',
                author: 'Userdude',
                media: 'https://i.imgur.com/bEEsSNV.jpg'
            }
        ],
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
            })
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
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