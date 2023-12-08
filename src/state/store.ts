import { configureStore } from "@reduxjs/toolkit"; //Used to create the store

export const store = configureStore({
    reducer: {
        //This is where the reducers are contained
    }
}); 

//This is the type of the state. We need to define it so we can use it in the useSelector hook
export type RootState = ReturnType<typeof store.getState>; 

//This is the type of the dispatch. We need to define it so we can use it in the useDispatch hook
export type AppDispatch = typeof store.dispatch; 

//-----------Notes for studying----------------//
//The store is a single object that holds the state of the application
//The store is created using the configureStore function from redux toolkit