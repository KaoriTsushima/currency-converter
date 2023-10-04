import React, { useState, useEffect } from "react";
import CurrencyOptions from "./CurrencyOptions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./CurrencyForm.css";
import { currencyList } from "./currencyList";
import Button from "react-bootstrap/Button";
import Timestamp from "react-timestamp";

export default function CurrencyForm() {
  const ratio = 1.5;
  const [from, setFrom] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState(null);

  async function startCalculate() {
    setResult(from * ratio);
  }

  useEffect(() => {
    async function getCurrencies() {
      try {
        // const result = await axios.get(
        //   "https://api.freecurrencyapi.com/v1/currencies",
        //   {
        //     params: {
        //       apikey: process.env.REACT_APP_CURRENCY_API_KEY,
        //     },
        //   }
        // );
        const result = currencyList;
        setCurrencies(result.data.data);
      } catch (e) {
        console.error(e);
      }
    }
    getCurrencies();
  }, []);

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
          <CurrencyOptions currencies={currencies} />
        </div>

        <FontAwesomeIcon icon={faDownLong} size="3x" />

        <div className="row justify-content-center align-items-center mt-3 mb-5">
          {/* <div className="col-lg-4 text-left pl-4 border">
            <p>{from * ratio}</p>
          </div> */}
          <CurrencyOptions currencies={currencies} />
          <Button variant="primary" onClick={startCalculate}>
            Calculate
          </Button>
        </div>
      </form>
      {result !== null ? (
        <div className="result">
          <p>You will have {result} GBP</p>
          <p>Rate: {ratio}</p>
          <p>
            <Timestamp date={Date()} />
          </p>
        </div>
      ) : null}
    </div>
  );
}
