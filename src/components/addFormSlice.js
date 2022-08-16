import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "notice",
  title: "",
  description: "",
  endDate: "",
  data: {},
  edit: false,
  editCell: {},
};
export const addFormSlice = createSlice({
  name: "AddForm",
  initialState,
  reducers: {
    changeType: (state, action) => {
      if (action.payload === "table") {
        state.type = "table";
        state.data = {
          col: 3,
          row: 3,
          tableBody: Array(3).fill(Array(3).fill("")),
        };
      } else if (action.payload === "notice") {
        state.type = "notice";
        state.data = {};
      }
    },
    toggleEdit: (state, action) => {
      if (action.payload.edit) {
        state.edit = action.payload.edit;
        state.editCell = {
          col: action.payload.col,
          row: action.payload.row,
          value: action.payload.value,
        };
      } else {
        state.edit = false;
        state.editCell = {};
      }
    },
    changeValue: (state, action) => {
      if (state.edit && state.type === "table") {
        state.data.tableBody[state.editCell.row][state.editCell.col] =
          action.payload;
      }
    },
    changeEditValue: (state, action) => {
      state.editCell.value = action.payload;
    },
  },
});

export const { changeType, toggleEdit, changeValue, changeEditValue } =
  addFormSlice.actions;

export default addFormSlice.reducer;
