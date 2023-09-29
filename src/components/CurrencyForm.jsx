import React, { useState } from "react";
import CurrencyOptions from "./CurrencyOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import "./CurrencyForm.css";
export default function CurrencyForm() {
  const ratio = 1.5;
  const [from, setFrom] = useState(0);
  return (
    <div className="currency-form">
      <form>
        <div className="row justify-content-center mt-5 mb-3">
          <div className="col-lg-4">
            <input
              type="number"
              min="0"
              className="form-control"
              placeholder="From"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <CurrencyOptions />
        </div>

        <FontAwesomeIcon icon={faDownLong} size="3x" />

        <div className="row justify-content-center align-items-center mt-3 mb-5">
          <div className="col-lg-4 text-left pl-4 border">
            <p>{from * ratio}</p>
          </div>
          <CurrencyOptions />
        </div>
      </form>
      {/* const url ="https://api.freecurrencyapi.com/v1/latest?apikey=YOUR-APIKEY" */}
    </div>
  );
}
