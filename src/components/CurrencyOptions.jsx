import React from "react";
import { currencyList } from "./currencyList.js";

export default function CurrencyOptions() {
  return (
    <div className="col">
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose Currency</option>
        {currencyList.map((currency) => (
          <option>{currency}</option>
        ))}
      </select>
    </div>
  );
}
