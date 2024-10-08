import { createSlice, createAsyncThunk } from "../api/subscribe";
import { addConmment, viewComments } from "../api/comment";

export const createComment = createAsyncThunk(
  "comment/createComment",
  async (data) => {
    const response = await addConmment(data);
    return response.data;
  }
);

export const fetchComments = createAsyncThunk(
  "comment/fetchComments",
  async (videoCode) => {
    const response = await viewComments(videoCode);
    return response.data;
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState: { comments: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createComment.fulfilled, (state, action) => {
        state.comments = [action.payload, ...state.comments];
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});

export default commentSlice;
