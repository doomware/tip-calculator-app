import React, { Fragment, useEffect, useState } from "react";
import {
  calculateIndividualTip,
  calculateTotalWithTip,
} from "../utils/calculate";
import "../assets/styles/calculator.scss";

function Card() {
  const [data, setData] = useState({
    billInput: 0,
    tipPercentage: 0,
    noPeople: 0,
    tipAmount: "0.00",
    totalAmount: "0.00",
  });
  const [control, setControl] = useState({ error: "", idRadio: "" });
  const billInput = parseFloat(data["billInput"], 10);
  const totalPerson = parseFloat(data["noPeople"], 10);
  const tipPercentage = parseFloat(data["tipPercentage"], 10);

  function handleInputChange(event) {
    const number = parseFloat(event.target.value, 10);
    setData({ ...data, [event.target.name]: number });
  }

  function handlePersonsChange(event) {
    const number = Number(event.target.value);
    const errorBorder = "2px solid #f0613d";

    if (number === 0) {
      setControl({ ...control, error: "Can't be zero" });
      event.target.style.border = errorBorder;
    } else if (number !== 0) {
      setControl({ ...control, error: "" });
      event.target.style.border = "";
    }
    setData({ ...data, [event.target.name]: number });
  }

  function handleRadioInput(event) {
    document.getElementsByClassName("input-percent")[0].value = "";
    const idRadio = event.target.id;
    const number = Number(event.target.value);
    setControl({ ...control, idRadio: idRadio });
    setData({ ...data, [event.target.name]: number });
  }

  useEffect(() => {
    var tipClient = calculateIndividualTip(
      billInput,
      totalPerson,
      tipPercentage
    );
    var totalWithTip = calculateTotalWithTip(billInput, totalPerson, tipClient);

    setData((data) => ({
      ...data,
      tipAmount: tipClient,
      totalAmount: totalWithTip,
    }));
  }, [billInput, totalPerson, tipPercentage]);

  function handleFocusedInput() {
    if (control.idRadio !== "") {
      const button = document.getElementById(control.idRadio);
      button.checked = false;
    }
    setData({ ...data, tipPercentage: 0 });
  }

  function resetInputs() {
    setData({
      ...data,
      billInput: 0,
      tipPercentage: 0,
      noPeople: 0,
      tipAmount: "0.00",
      totalAmount: "0.00",
    });
    document.getElementById("calculator").reset();
  }

  return (
    <Fragment>
      <div className="card">
        <div className="calculator-in">
          <form id="calculator">
            <div className="bill">
              <label htmlFor="billInput">
                <h4>Bill</h4>
              </label>
              <div>
                <span className="icon-dollar"></span>
                <input
                  type="number"
                  name="billInput"
                  placeholder="0"
                  onChange={handleRadioInput}
                />
              </div>
            </div>

            <h4 className="label-tip">Select Tip %</h4>
            <div className="tip">
              <div>
                <input
                  type="radio"
                  value="5"
                  id="tip-5"
                  name="tipPercentage"
                  onChange={handleRadioInput}
                />
                <label htmlFor="tip-5" id="tip-5-label" className="label-radio">
                  5%
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="10"
                  id="tip-10"
                  name="tipPercentage"
                  onChange={handleRadioInput}
                />
                <label
                  htmlFor="tip-10"
                  id="tip-10-label"
                  className="label-radio"
                >
                  10%
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="15"
                  id="tip-15"
                  name="tipPercentage"
                  onChange={handleRadioInput}
                />
                <label
                  htmlFor="tip-15"
                  id="tip-15-label"
                  className="label-radio"
                >
                  15%
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="25"
                  id="tip-25"
                  name="tipPercentage"
                  onChange={handleRadioInput}
                />
                <label
                  htmlFor="tip-25"
                  id="tip-25-label"
                  className="label-radio"
                >
                  25%
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  value="50"
                  id="tip-50"
                  name="tipPercentage"
                  onChange={handleRadioInput}
                />
                <label
                  htmlFor="tip-50"
                  id="tip-50-label"
                  className="label-radio"
                >
                  50%
                </label>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Custom"
                  name="tipPercentage"
                  className="input-percent"
                  onChange={handleInputChange}
                  onFocus={handleFocusedInput}
                />
              </div>
            </div>

            <div className="people">
              <div className="people-label">
                <label htmlFor="noPeople">
                  <h4>Number of People</h4>
                </label>
                <span className="error">{control.error}</span>
              </div>

              <div>
                <span className="icon-person"></span>
                <input
                  type="number"
                  name="noPeople"
                  placeholder="0"
                  id="people-input"
                  onChange={handlePersonsChange}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="calculator-out">
          <div className="tipAmount">
            <div>
              <h5>Tip Amount</h5>
              <p>/ person</p>
            </div>
            <h2>${data["tipAmount"]}</h2>
          </div>
          <div className="total">
            <div>
              <h5>Total</h5>
              <p>/ person</p>
            </div>
            <h2>${data["totalAmount"]}</h2>
          </div>
          <div className="separator" />
          <button className="reset-btn" onClick={resetInputs}>
            RESET
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
