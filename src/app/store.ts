import {configureStore, createSlice, PayloadAction, PreloadedState} from '@reduxjs/toolkit';

//reducer
export const theTextSlice = createSlice({
    name: 'thetext',
    initialState: '',
    reducers: {
      updateTheText: (_state, action: PayloadAction<string>) => action.payload,
    }
  })
  
  export const { updateTheText } = theTextSlice.actions
  export const selectTheText = (state: RootState) => state.thetext



// store
export const setupStore = (preloadedState?: PreloadedState<RootState>) => configureStore({
    reducer: {thetext: theTextSlice.reducer},
    preloadedState,
  });
export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = typeof store.dispatch;



//hooks
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector