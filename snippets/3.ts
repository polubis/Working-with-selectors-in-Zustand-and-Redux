// @Component
import { getAnything } from 'selectors'
import { useSelector } from 'redux'
 
const Component = () => {
  // Selector used!
  const anything = useSelector(getAnything)
}
 
// @Act
import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAnything } from 'selectors'
 
export const actAnything = createAsyncThunk(
  "anything/doSomething",
  async (
    { payload }: { payload: SignInPayload },
    { rejectWithValue, getState }
  ) => {
    try {
      // Selector used!
      const anything = getAnything(getState())
    } catch (error: unknown) {
      return rejectWithValue(error)
    }
  }
)
 
// @Slice
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { getAnything } from 'selectors'
 
const anythingSlice = createSlice({
  name: 'anything',
  initialState: {},
  reducers: {
    addSomething(state) {
      // Selector used!
      const anything = getAnything(state)
    }
  },
})
 
export default postsSlice
 
// @Middleware
import type { Middleware } from 'redux'
import { getAnything } from 'selectors'
import type { AppState } from 'store'
 
const reportException: Middleware<{}, AppState> =
  (store) => (next) => (action) => {
    // Selector used!
    const anything = getAnything(store.getState())
    return next(action)
  };