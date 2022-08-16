import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiTwotoneEdit } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { changeEditValue, changeValue, toggleEdit } from "./addFormSlice";
import { data } from "autoprefixer";

const AddTableForm = () => {
  const dispatch = useDispatch();
  const addFormSlice = useSelector((state) => state.addFormSlice);
  return (
    <div className="relative">
      <div className="flex justify-center"></div>
      <table className="w-full my-4 table-fixed">
        <tbody>
          {addFormSlice.data.tableBody.map((i, row) => {
            return (
              <tr className=" odd:bg-theme-light first-of-type:font-bold">
                {i.map((j, col) => {
                  return (
                    <td
                      className={`border group border-theme-secondary-light/50 p-2 ${
                        addFormSlice.edit &&
                        addFormSlice.editCell.row == row &&
                        addFormSlice.editCell.col == col
                          ? "bg-theme-secondary-light"
                          : ""
                      }`}
                      onClick={() =>
                        dispatch(
                          toggleEdit({
                            edit: "true",
                            row: row,
                            col: col,
                            value: j,
                          })
                        )
                      }
                    >
                      <div className="flex justify-between items-center pointer-events-none">
                        <p>{j == "" ? "Empty" : j}</p>
                        <AiTwotoneEdit className="hidden group-hover:inline" />
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {addFormSlice.edit && (
        <div className=" absolute top-0 my-2 left-0 w-full h-full bg-theme-secondary-dark/60">
          <form
            className="relative top-[40%] left-[40%] w-[20%]"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(toggleEdit({ edit: false }));
            }}
            onBlur={(e) => {
              e.preventDefault();
              dispatch(toggleEdit({ edit: false }));
            }}
          >
            <input
              className=" rounded-md"
              onChange={(e) => dispatch(changeValue(e.target.value))}
              type="text"
              name="value"
              autoFocus
              onFocus={(e) => e.currentTarget.select()}
              defaultValue={addFormSlice.editCell.value}
            />
          </form>
          <GiCancel
            onClick={() => dispatch(toggleEdit({ edit: false }))}
            className="text-white hover:text-theme-light text-xl absolute top-4 right-4"
          />
        </div>
      )}
    </div>
  );
};

export default AddTableForm;
