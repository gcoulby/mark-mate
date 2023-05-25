import React, { useState, useEffect } from "react";
function Mark(props) {
  useEffect(() => {
    console.log(props.mark);
  }, []);
  return (
    <tr>
      <td>
        <input type="number" value={props.mark.available} onChange={(e) => props.setMark(props.index, "available", e.target.value)} />
      </td>
      <td>
        <input
          type="number"
          value={props.mark.awarded}
          onChange={(e) => {
            props.setMark(props.index, "awarded", e.target.value);
            props.setMark(props.index, "percentage", (e.target.value / props.mark.available) * 100);
          }}
        />
      </td>
      <td>
        <input
          type="number"
          value={props.mark.percentage}
          onChange={(e) => {
            props.setMark(props.index, "awarded", Math.round(props.mark.available - props.mark.available * ((100 - e.target.value) / 100)));
            props.setMark(props.index, "percentage", e.target.value);
          }}
        />
        {/* <strong>{Math.round(props.mark.available - props.mark.available * ((100 - props.mark.percentage) / 100))}</strong> */}
      </td>
    </tr>
  );
}

export default Mark;
