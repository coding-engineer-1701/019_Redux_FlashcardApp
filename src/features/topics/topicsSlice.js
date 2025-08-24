
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const sliceOptions = {
    name: 'topicsSlice', 
    initialState: {
        topics: {},
    },
    reducers: {
        addTopic: (state, action) => {
            const {id, name, icon} = action.payload;
            state.topics[id] = action.payload;
        }
    }};

export const topicsSlice = createSlice(sliceOptions);
