import React, { useState } from "react";

export const ConfConf = ({ handleClick }) => {
  return (
    <>
      <div id="conf-1" className="row">
        <div className=" col-12 col-md-3">
          <button className="btn top-btn">
            Reset all data
            <i className="fa fa-refresh refresh" aria-hidden="true"></i>
          </button>
        </div>
        <div className="col-12 col-md-6">
          <div className="multi-button">
            <input
              name="fpga buttons"
              value="arty-a7-35t"
              type="radio"
              id="arty_a7"
              defaultChecked
            />
            <label htmlFor="arty_a7">Arty A-7</label>
            <input
              name="fpga buttons"
              value="arty-a7-100t"
              type="radio"
              id="arty_a100"
            />
            <label htmlFor="arty_a100">Arty A-100</label>
            <input name="fpga buttons" value="zybo-z7" type="radio" id="zybo" />
            <label htmlFor="zybo">Zybo Z-7</label>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <button
            onClick={handleClick}
            className="btn top-btn notch"
            id="notchclick"
          >
            Generate Bitstream
            <i className="fa fa-arrow-right refresh" ></i>
          </button>
        </div>
      </div>
    </>
  );
};
