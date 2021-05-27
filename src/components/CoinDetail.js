import React from "react";

function CoinDetail({ currencyData }) {
  return (
    <div className="coin__detail">
      <div className="d-flex flex-column ">
        <div className="justify-content-center text-center">
          <div>
            <img
              src={currencyData.currencydata.image}
              alt={currencyData.currencydata.id}
            />
          </div>
          <div>
            <h1>{currencyData.currencydata.name}</h1>
          </div>
          <div>
            <p>{currencyData.currencydata.symbol}</p>
          </div>
          <div>
            <h2>
              {" "}
              <i class="fas fa-rupee-sign" style={{ paddingRight: "4px" }}></i>
              {currencyData.currencydata.current_price}
            </h2>
          </div>
          <div>
            {currencyData.currencydata.price_change_percentage_24h >= 0 ? (
              <div className="text-success">
                <i
                  className="fas fa-caret-up "
                  style={{ paddingRight: "6px" }}
                ></i>
                {currencyData.currencydata.price_change_percentage_24h}%
              </div>
            ) : (
              <div className="text-danger">
                <i
                  class="fas fa-caret-down"
                  style={{ paddingRight: "6px" }}
                ></i>
                {currencyData.currencydata.price_change_percentage_24h}%
              </div>
            )}
          </div>
          <div className="d-flex justify-content-around">
            <div>
              24 hr high:
              <h6>
                <i
                  class="fas fa-rupee-sign"
                  style={{ paddingRight: "4px" }}
                ></i>
                {currencyData.currencydata.high_24h}
              </h6>
            </div>
            <div>
              24 hr low :
              <h6>
                <i
                  class="fas fa-rupee-sign"
                  style={{ paddingRight: "4px" }}
                ></i>
                {currencyData.currencydata.low_24h}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinDetail;
