import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export const ConfConf2 = ({ handleButtonClick, showBitFile }) => {
  const [isClockEnabled, setClockEnabled] = useState(false);
  const [clockFrequency, setClockFrequency] = useState(12);

  const handleCheckboxChange = (event) => {
    setClockEnabled(event.target.checked);
  };

  const handleInputChange = (event) => {
    setClockFrequency(event.target.value);
  };

  const [showSpinners, setShowSpinners] = useState({
    synth: false,
    pack: false,
    place: false,
    route: false,
    fasm: false,
    bit: false,
  });
  const [showBitFilePermanent, setShowBitFilePermanent] = useState(false);

  useEffect(() => {
    let timeout;

    if (showBitFile) {
      setShowSpinners({
        synth: true,
        pack: false,
        place: false,
        route: false,
        fasm: false,
        bit: false,
      });

      timeout = setTimeout(() => {
        setShowSpinners({
          synth: false,
          pack: true,
          place: false,
          route: false,
          fasm: false,
          bit: false,
        });

        timeout = setTimeout(() => {
          setShowSpinners({
            synth: false,
            pack: false,
            place: true,
            route: false,
            fasm: false,
            bit: false,
          });

          timeout = setTimeout(() => {
            setShowSpinners({
              synth: false,
              pack: false,
              place: false,
              route: true,
              fasm: false,
              bit: false,
            });

            timeout = setTimeout(() => {
              setShowSpinners({
                synth: false,
                pack: false,
                place: false,
                route: false,
                fasm: true,
                bit: false,
              });

              timeout = setTimeout(() => {
                setShowSpinners({
                  synth: false,
                  pack: false,
                  place: false,
                  route: false,
                  fasm: false,
                  bit: true,
                });

                timeout = setTimeout(() => {
                  setShowSpinners({
                    synth: false,
                    pack: false,
                    place: false,
                    route: false,
                    fasm: false,
                    bit: false,
                  });

                  timeout = setTimeout(() => {
                    setShowBitFilePermanent(true); // Display bit_file permanently
                  }); // Display bit_file after 20 seconds
                }, 3000); // Show the bit spinner for 3 seconds
              }, 3000); // Show the fasm spinner for 3 seconds
            }, 3000); // Show the route spinner for 3 seconds
          }, 3000); // Show the place spinner for 3 seconds
        }, 3000); // Show the pack spinner for 3 seconds
      }, 3000); // Show the synth spinner for 3 seconds
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showBitFile]);

  return (
    < >
      <div id="conf-2" className="row container-fluid mx-auto">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="pink-box diff">
            <h3>
              Add Design Sources
              <img src="img/add.png" className="icon-btn"/>
            </h3>
            <div id="source-files" className="files-box row"></div>
          </div>

          <div className="spacer"></div>
          <div className="pink-box diff">
            <h3>
              Map Design Constraints
              <Link to="/dashboard/fpga">
              <img
                src="img/fwd.png"
                className="icon-btn"
                style={{ width: '50%', textAlign: 'center', cursor: 'pointer' }}
              />
              </Link>
            </h3>
          </div>
          <div className="spacer"></div>
          <div
            className={`pink-box purple-too ${
              isClockEnabled ? "" : "disabled"
            }`}
          >
            <h3>
              <input
                type="checkbox"
                id="virt_clk"
                onChange={handleCheckboxChange}
              />
              <label htmlFor="virt_clk"> Add Virtual Clock </label>
            </h3>
            <p>
              Clock Frequency
              <input
                id="clock_freq"
                disabled={!isClockEnabled}
                type="number"
                value={clockFrequency}
                min="1"
                max="100"
                onChange={handleInputChange}
              />
              MHz
            </p>
          </div>
          <div className="spacer"></div>
        </div>
        <div className=""></div>
        <div className="col-12 col-sm-12 col-md-6">
          <div className="pink-box diff">
            <h3> Progress Indicator </h3>

            <div className="tags">
              <div id="synth">
                <img src="img/synth_gray.png" />
                <img src="img/synth_blue.png" className="no_tag" />
                <img src="img/synth_green.png" className="no_tag" />
                <img src="img/synth_red.png" className="no_tag" />
                <p> Synthesis </p>
                {showSpinners.synth && <div className="loading-spinner"></div>}
              </div>

              <div id="pack">
                <img src="img/pack_gray.png" />
                <img src="img/pack_blue.png" className="no_tag" />
                <img src="img/pack_green.png" className="no_tag" />
                <img src="img/pack_red.png" className="no_tag" />
                <p> Packaging </p>
                {showSpinners.pack && <div className="loading-spinner"></div>}
              </div>

              <div id="place">
                <img src="img/place_gray.png" />
                <img src="img/place_blue.png" className="no_tag" />
                <img src="img/place_green.png" className="no_tag" />
                <img src="img/place_red.png" className="no_tag" />
                <p> Placement </p>
                {showSpinners.place && <div className="loading-spinner"></div>}
              </div>

              <div id="route">
                <img src="img/route_gray.png" />
                <img src="img/route_blue.png" className="no_tag" />
                <img src="img/route_green.png" className="no_tag" />
                <img src="img/route_red.png" className="no_tag" />
                <p> Routing </p>
                {showSpinners.route && <div className="loading-spinner"></div>}
              </div>

              <div id="fasm">
                <img src="img/fasm_gray.png" />
                <img src="img/fasm_blue.png" className="no_tag" />
                <img src="img/fasm_green.png" className="no_tag" />
                <img src="img/fasm_red.png" className="no_tag" />
                <p> Writing FASM </p>
                {showSpinners.fasm && <div className="loading-spinner"></div>}
              </div>

              <div id="bit">
                <img src="img/bit_gray.png" />
                <img src="img/bit_blue.png" className="no_tag" />
                <img src="img/bit_green.png" className="no_tag" />
                <img src="img/bit_red.png" className="no_tag" />
                <p> Writing Bitstream </p>
                {showSpinners.bit && <div className="loading-spinner"></div>}
              </div>
            </div>
          </div>

          <div className="spacer"></div>
          <div className="pink-box diff">
            <h3>
              Bitstream File <img src="img/download.png" />
            </h3>
            <div className="files-box row">
              <div
                id="bit_file"
                className="col-6 col-md-4 "
                style={{ display: showBitFilePermanent ? "block" : "none" }}
              >
                <div className="cancel icon-div">
                  <img src="img/internal.png" />
                </div>

                <div className="file-box">
                  <img src="img/file.png" />
                  <p> output.bit </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
