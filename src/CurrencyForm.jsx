import React from "react";
export default function CurrencyForm() {
  return (
    <div className="currency-form">
      <form>
        <div className="row">
          <div className="col">
            <input type="text" className="form-control" placeholder="From" />
          </div>
          <div className="col">
            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="To" />
          </div>
        </div>
      </form>
    </div>
  );
}
