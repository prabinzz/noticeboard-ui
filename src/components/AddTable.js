import React, { useEffect, useState } from "react";
import TableEdit from "./TableEdit";

const AddTable = () => {
  const [col, setCol] = useState(Array(3).fill(1));
  const [row, setRow] = useState(Array(3).fill(1));
  const [data, setData] = useState([[]]);
  useEffect(() => {
    setData(Array(row.length).fill(Array(col.length).fill("")));
  }, [col, row]);

  const addRow = () => {
    setRow((pre) => {
      return Array(pre.length + 1).fill(1);
    });
  };

  const addCol = () => {
    setCol((pre) => {
      return Array(pre.length + 1).fill(1);
    });
  };

  const removeRow = () => {
    setRow((pre) => {
      return Array(pre.length - 1).fill(1);
    });
  };

  const removeCol = () => {
    setCol((pre) => {
      return Array(pre.length - 1).fill(1);
    });
  };
  return (
    <div>
      <div className="flex gap-3 my-4">
        <input
          className="bg-gray-300 px-3 py-2 rounded-md"
          onClick={addRow}
          type="button"
          value="Add Row"
        />
        <input
          className="bg-gray-300 px-3 py-2 rounded-md"
          type="button"
          onClick={removeRow}
          value="Remove Row"
        />
        <input
          className="bg-gray-300 px-3 py-2 rounded-md"
          type="button"
          onClick={addCol}
          value="Add Col"
        />
        <input
          className="bg-gray-300 px-3 py-2 rounded-md"
          type="button"
          onClick={removeCol}
          value="Remove Col"
        />
      </div>
      <TableEdit
        col={col}
        row={row}
        data={data}
        setData={setData}
        setCol={setCol}
      />
    </div>
  );
};

export default AddTable;
