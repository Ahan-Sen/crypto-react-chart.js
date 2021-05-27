import React from "react";

function Table({ props, currency }) {
  return (
    <>
      <tr
        onClick={() => {
          props.history.push(`/currency/${currency.id}`);
        }}
      >
        <td>
          <div className="d-flex ">
            <img className="img__coin" src={currency.image} alt={currency.id} />
            <div>
              <h6>{currency.name}</h6>
              <p>{currency.symbol}</p>
            </div>
          </div>
        </td>
        <td>
          <i class="fas fa-rupee-sign"></i> {currency.current_price}
        </td>
        <td>
          <i class="fas fa-rupee-sign" style={{ paddingRight: "4px" }}></i>
          {currency.total_volume}
        </td>
        <td>
          {currency.price_change_percentage_24h >= 0 ? (
            <div className="text-success">
              <i
                className="fas fa-caret-up "
                style={{ paddingRight: "6px" }}
              ></i>
              {currency.price_change_percentage_24h}%
            </div>
          ) : (
            <div className="text-danger">
              <i class="fas fa-caret-down" style={{ paddingRight: "6px" }}></i>
              {currency.price_change_percentage_24h}%
            </div>
          )}
        </td>
        <td>
          <i class="fas fa-rupee-sign" style={{ paddingRight: "4px" }}></i>
          {currency.market_cap}
        </td>
      </tr>
    </>
  );
}

export default Table;
