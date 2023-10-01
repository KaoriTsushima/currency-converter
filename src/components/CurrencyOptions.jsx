import React, { useState } from "react";

export default function CurrencyOptions({ currencies }) {
  const [selectedCurrency, setCurrency] = useState("");
  return (
    <div className="col-lg-3">
      <select
        value={selectedCurrency}
        className="custom-select mr-sm-2"
        id="inlineFormCustomSelect"
        onChange={(e) => setCurrency(e.target.value)}
      >
        {Object.keys(currencies).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
