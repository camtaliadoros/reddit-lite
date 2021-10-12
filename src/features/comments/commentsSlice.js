import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const loadComments = payload => {
    return (dispatch) => {
        dispatch(addPostId(payload.postId));
        dispatch(loadCommentsData(payload.permalink));
    }
}

export const loadCommentsData = createAsyncThunk(
    'comments/loadCommentsData',
    async (url) => {
        const urlToFetch = 'https://www.reddit.com' + url + '.json';
        const response = await fetch(urlToFetch);
        const json = await response.json();
        return json;
    }
)

export const commentsSlice = createSlice ({
    name: 'comments',
    initialState: {
        byId: {},
        isLoading: false,
        failedToLoad: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCommentsData.pending, (state, action) => {
                // const postId = action.payload[0].data.children[0].data.id;
                state.isLoading = true;
                state.failedToLoad = false;
            })
            .addCase(loadCommentsData.rejected, (state, action) => {
                // const postId = action.payload[0].data.children[0].data.id;
                state.isLoading = false;
                state.failedToLoad = true; 
            })
            .addCase(loadCommentsData.fulfilled, (state, action) => {
                // const postId = action.payload[0].data.children[0].data.id;
                state.isLoading = false;
                state.failedToLoad = false; 
                const postId = action.payload[0].data.children[0].data.id;
                state.byId[postId] = action.payload[1].data.children;
                console.log(action.payload[1].data.children)
            })
    }

})

export const selectComments = (state) => 
{ 
    return state.comments.byId;
};

export const loading = state => state.comments.isLoading;

export const { addPostId } = commentsSlice.actions;

export default commentsSlice.reducer;