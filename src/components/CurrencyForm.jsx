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
  const [from, setFrom] = useState(0);
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [ratio, setRatio] = useState(1);
  const [error, setError] = useState(false);

  async function startCalculate() {
    setError(false);
    if (!fromCurrency || !toCurrency || from <= 0) {
      setError(true);
      return;
    }

    const result = await axios.get(
      "https://api.freecurrencyapi.com/v1/latest",
      {
        params: {
          apikey: process.env.REACT_APP_CURRENCY_API_KEY,
          base_currency: fromCurrency,
          currencies: toCurrency,
        },
      }
    );
    const ratioFromApi = result.data.data[toCurrency];
    setRatio(ratioFromApi);
    setResult(from * ratioFromApi);
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
          <CurrencyOptions
            selectedCurrency={fromCurrency}
            setSelectedCurrency={setFromCurrency}
            currencies={currencies}
          />
        </div>

        <FontAwesomeIcon icon={faDownLong} size="3x" />

        <div className="row justify-content-center align-items-center mt-3 mb-5">
          {/* <div className="col-lg-4 text-left pl-4 border">
            <p>{from * ratio}</p>
          </div> */}
          <CurrencyOptions
            selectedCurrency={toCurrency}
            setSelectedCurrency={setToCurrency}
            currencies={currencies}
          />
          <Button variant="primary" onClick={startCalculate}>
            Calculate
          </Button>
        </div>
      </form>

      {error ? (
        <div className="error-message">
          <p>Please fill Value and Currencies</p>
        </div>
      ) : null}
      {result !== null ? (
        <div className="result">
          <p>
            You will have {result} {toCurrency}
          </p>
          <p>Rate: {ratio}</p>
          <p>
            <Timestamp date={Date()} />
          </p>
        </div>
      ) : null}
    </div>
  );
}
