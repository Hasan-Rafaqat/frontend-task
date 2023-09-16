import taskReducer from "./tasks/taskSlice";

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    taskReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
