import { configureStore, } from "@reduxjs/toolkit"; 
import authSlice from "../features/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
    }
}); 

//This is the type of the state. We need to define it so we can use it in the useSelector hook
export type RootState = ReturnType<typeof store.getState>; 

//This is the type of the dispatch. We need to define it so we can use it in the useDispatch hook
export type AppDispatch = typeof store.dispatch; 



//-----------Notes for studying----------------//
//configureStore is used to create the store and it takes an object as an argument

//The store is a single object that holds the state of the application. We pass the different reducers to the store so it can combine them into a single state object.