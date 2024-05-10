import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
  selectedTask: {},
  isLoading: false,
  error: "",
};

//Get async operation

const url = "http://localhost:8000/tasks";

export const getTasksFromServer = createAsyncThunk(
  "tasks/getTasksFromServer",
  async (_, rejectedWithValue) => {
    const response = await fetch(url);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectedWithValue({ error: "No Tasks Found" });
    }
  }
);

//Post -create Task Async operations

export const addTasksToServer = createAsyncThunk(
  "tasks/addTasksToServer",
  async (task, { rejectedWithValue }) => {
    const options = {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    };
    const response = await fetch(url, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectedWithValue({ error: "No Tasks Added" });
    }
  }
);

export const updateTasksToServer = createAsyncThunk(
  "tasks/updateTasksToServer",
  async (task, { rejectedWithValue }) => {
    const options = {
      method: "PATCH",
      body: JSON.stringify(task),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    };
    const response = await fetch(url+ '/' + task.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectedWithValue({ error: "No Tasks updated" });
    }
  }
);


export const deleteTaskFromServer = createAsyncThunk(
  "tasks/deleteTaskFromServer",
  async (task, { rejectedWithValue }) => {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(url+ '/' + task.id, options);
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    } else {
      return rejectedWithValue({ error: "No Tasks deleted" });
    }
  }
);
const TodoSlice = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addTodoList(state, action) {
      const id = Math.random() * 100;
      let task = { ...action.payload, id };
      state.taskList.push(task);
    },
    updateTodoList(state, action) {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    removeTodoList(state, action) {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    setSelectedTask(state, action) {
      state.selectedTask = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getTasksFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTasksFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.taskList = action.payload;
      })
      .addCase(getTasksFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.taskList = [];
      })
      .addCase(addTasksToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTasksToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.taskList.push(action.payload);
      })
      .addCase(addTasksToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
        state.taskList = [];
      })

      .addCase(updateTasksToServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTasksToServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.taskList = state.taskList.map((task) =>
          task.id === action.payload.id ? action.payload : task
        );
      })
      .addCase(updateTasksToServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      })

      .addCase(deleteTaskFromServer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTaskFromServer.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.taskList = state.taskList.filter(
          (task) => task.id !== action.payload.id
        );
       
      })
      .addCase(deleteTaskFromServer.rejected, (state, action) => {
        state.error = action.payload.error;
        state.isLoading = false;
      });

  },
});

export const { addTodoList, removeTodoList, updateTodoList, setSelectedTask } =
  TodoSlice.actions;
export default TodoSlice.reducer;
