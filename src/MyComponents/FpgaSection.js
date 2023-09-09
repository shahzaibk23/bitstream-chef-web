import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";


export const FpgaSection = () => {
  return (
    <>
      <div className="row fpgasection">
        <div className="col-6 col-sm-3 col-md-2">
          <Link to="/dashboard">
          <img
            src="../img/back.png"
            alt="back"
            id="backFPGA"
          />
          </Link>
        </div>
        <div className="col-md-8 fpgadiv">
          <br />
          <div className="glass fpga-box">
            <div className="tal">
              <div>
                <h4 className="head colorwt">Map I/Os to FPGA</h4>
                <br />
                <p className="middle colorwt">
                  Map what SoC pins shall be mapped into FPGA components
                </p>
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6 simple-borders row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                      <p className="colorwt">Top Module</p>
                      <label className="select" htmlFor="slct">
                        <select
                          id="slct"
                          name="{{"
                          comp="}}"
                          required="required"
                        >
                          <option
                            id="top_module"
                            value=""
                            disabled="disabled"
                            defaultValue="selected"
                          >
                            Select top
                          </option>
                        </select>
                        <svg>
                          <use href="#select-arrow-down"></use>
                        </svg>
                      </label>
                      <svg className="sprites">
                        <symbol id="select-arrow-down" viewBox="0 0 10 6">
                          <polyline points="1 1 5 5 9 1"></polyline>
                        </symbol>
                      </svg>
                    </div>
                  </div>
                  <div className="col-md-3"></div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-7">
                  <img className="imgwd" src="../img/fpga/arty.png" />
                  <br />
                  <br />
                </div>
                <div className="col-md-5 darker-borders">
                  <ul id="gener" className="colorwt">
                    <h6>Mapped IOs</h6>
                  </ul>
                </div>

                <br />
              </div>

              <br />
              <br />
              <div className="row">
                <div className="col-md-12 simple-borders">
                  <div id="fpga_components" className="container row"></div>

                  <br />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center"></div>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
};
