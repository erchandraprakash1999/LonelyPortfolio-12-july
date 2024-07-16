import { configureStore } from "@reduxjs/toolkit";
import  PortFolioSlice from "./slices/PortFolioSlice";
export const store = configureStore({
        reducer:{
                portfolio:PortFolioSlice,
        },
})

export default store;

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch