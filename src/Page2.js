import React from "react";

const Page2 = () => {
  return (
    <>
      <div className="header-1">Calculate Sonic Porosity</div>
      <form action="" align="center">
        <div style={{ fontSize: "1.2rem" }}>Enter the following data:</div>
        <div className="input-field">
          <label htmlFor="" className="lbl">
            Δtlog
          </label>
          <input type="number" className="input-box" />
          <label htmlFor="" className="lbl">
            μsec/ft
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="" className="lbl">
            Δtma
          </label>
          <input type="number" className="input-box" />
          <label htmlFor="" className="lbl">
            μsec/ft
          </label>
        </div>
        <div className="input-field">
          <label htmlFor="" style={{ marginLeft: "15px", marginRight: "15px" }}>
            Δtfl
          </label>
          <input type="number" className="input-box" />
          <label htmlFor="" className="lbl">
            μsec/ft
          </label>
        </div>
      </form>
      <button className="cal-btn">Calculate</button>
      <div className="input-field" style={{ marginLeft: "40px" }}>
        <label htmlFor="" className="lbl">
          Φs
        </label>
        <input type="number" className="input-box-2" />
        <label htmlFor="" className="lbl">
          Decimal
        </label>
      </div>
      <div className="input-field">
        <label htmlFor="" className="lbl">
          Φs
        </label>
        <input type="number" className="input-box-2" />
        <label htmlFor="" className="lbl">
          %
        </label>
      </div>
      <button className="next-btn">--</button>
      <div className="next">Back</div>

      <footer className="footer-2">
        <button className="exit-btn">Home</button>
      </footer>

      {/* <div align="center">
        <button className="cal-btn">Calculate</button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        Φs<div className="result-container"></div>Decimal
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        Φs<div className="result-container"></div>%
      </div> */}
    </>
  );
};

export default Page2;
