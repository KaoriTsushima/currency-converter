import React from "react";

export default function CurrencyOptions({
  selectedCurrency,
  setSelectedCurrency,
  currencies,
}) {
  return (
    <div className="col-lg-3">
      <select
        value={selectedCurrency}
        className="custom-select mr-sm-2"
        id="inlineFormCustomSelect"
        onChange={(e) => setSelectedCurrency(e.target.value)}
      >
        <option key="default" value="" disabled>
          Please select
        </option>
        {Object.keys(currencies).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
