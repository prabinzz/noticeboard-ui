import React, { useState } from "react";

const TableEdit = ({ col, row, data, setData, setCol }) => {
  const handleValueChange = (e) => {
    const cRow = e.target.getAttribute("cRow");
    const cCol = e.target.getAttribute("cCol");
    const value = e.target.value;
    data[cRow][cCol] = value;
    setData(data);
  };
  return (
    <table>
      <tbody>
        {data.map((i, cRow) => {
          return (
            <tr>
              {i.map((j, cCol) => {
                return (
                  <td>
                    <input
                      type="text"
                      onChange={handleValueChange}
                      defaultValue={j}
                      cRow={cRow}
                      cCol={cCol}
                    />
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableEdit;
