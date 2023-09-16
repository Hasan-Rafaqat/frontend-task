import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Task {
  id: string;
  text: string;
}
const initialState: Array<Task> = [
  {
    id: "1",
    text: "First Task",
  },
];
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    bulkDelete: (state, action: PayloadAction<string[]>) => {
      return state.filter((task) => {
        if (action.payload.includes(task.id)) {
          return false;
        }
        return true;
      });
    },
  },
});
export const { addTask, bulkDelete } = taskSlice.actions;
export const taskSelector = (state: RootState) => state.taskReducer;
export default taskSlice.reducer;
