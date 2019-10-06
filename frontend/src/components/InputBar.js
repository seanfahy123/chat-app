import React from "react";

const InputBar = () => {
  return (
    <div className="form-group">
      <label className="col-form-label">Default input</label>
      <input
        type="text"
        className="form-control"
        placeholder="Default input"
        id="inputDefault"
      />
    </div>
  );
};

export default InputBar;
