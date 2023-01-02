import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postsService from "./postsService";

const initialState = {
  posts: [],
  post: {},
  isLoading: false,
};

export const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
  try {
    return await postsService.getAllPosts();
  } catch (error) {
    console.error(error);
  }
});
export const getById = createAsyncThunk("posts/getById", async (_id) => {
  try {
    return await postsService.getById(_id);
  } catch (error) {
    console.error(error);
  }
});
export const getPostByName = createAsyncThunk(
  "posts/getPostByName",
  async (title) => {
    try {
      return await postsService.getPostByName(title);
    } catch (error) {
      console.error(error);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
      })
      .addCase(getAllPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.post = action.payload.post;
      });
    builder.addCase(getPostByName.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});

export const { reset } = postsSlice.actions;
export default postsSlice.reducer;
