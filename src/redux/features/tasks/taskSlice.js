import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: [],
};
const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1,status:'pending',...payload });
      }else{
        const lastElement=state.tasks.at(-1);
        state.tasks.push({id:lastElement.id+1,status:'pending',...payload})
      }
    },
    updateStatus:(state,{payload})=>{
      let task=state.tasks.find((task)=>task.id===payload.id);
      task.status=payload.status;
    },
    removeTask:(state,{payload})=>{
      state.tasks=state.tasks.filter((task)=>task.id!==payload)
    }
  },
});
export const { addTask,updateStatus,removeTask} = taskSlice.actions;

export default taskSlice.reducer;
