import React, { forwardedRef, useEffect, useState } from "react";

const Checkbox = forwardRef(
  ({ label, name, value, onChange }, forwardedRef) => {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
      if (onChange) {
        onChange(checked);
      }
    }, [checked]);

    return (
      <div onClick={() => setChecked(!checked)} style={{ cursor: "pointer" }}>
        <input
          style={{ display: "none" }}
          ref={forwardedRef}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
        [{checked ? "X" : " "}]{label}
      </div>
    );
  }
);
