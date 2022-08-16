import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeType } from "./addFormSlice";
import AddTableForm from "./AddTableForm";

const AddForm = () => {
  const types = ["notice", "table"];
  const dispatch = useDispatch();
  const formSlice = useSelector((state) => state.addFormSlice);

  return (
    <div>
      <div className="lg:mx-20 my-4 mt-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Title of the noice" />
        </div>
        <div className="flex flex-col gap-2">
          
          <label htmlFor="title">Notice</label>
          <textarea
            type="text"
            name="description"
            rows="3"
            placeholder="This is a body of notice"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="endDate">End Date</label>
          <select
            name="type"
            defaultValue={formSlice.type}
            onChange={(e) => {
              dispatch(changeType(e.target.value));
            }}
          >
            {types.map((i, index) => (
              <option value={i}>{i.toUpperCase()}</option>
            ))}
          </select>
        </div>
        {formSlice.type === "table" ? <AddTableForm /> : ""}
        <input type="submit" vlaue="ADD" />
      </div>
    </div>
  );
};

export default AddForm;
