import React, { useState } from "react";
import { currencyList } from "./currencyList.js";

export default function CurrencyOptions() {
  const [selectedCurrency, setCurrency] = useState(null);
  return (
    <div className="col-lg-3">
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected disabled>
          Currency
        </option>
        {currencyList.map((currency) => (
          <option
            value={selectedCurrency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
