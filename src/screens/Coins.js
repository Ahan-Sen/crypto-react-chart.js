import React, { useEffect, useRef } from "react";
import {
  listCurrency,
  clearDataCurrency,
  searchCurrency,
  clearSearch,
} from "../redux/currencyActions";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/Table";

function Coins(props) {
  const dispatch = useDispatch();
  const currencyList = useSelector((state) => state.currencyList);

  useEffect(() => {
    dispatch(listCurrency());
    dispatch(clearDataCurrency());
  }, [dispatch]);

  const searchValue = useRef("");
  const handleChange = (e) => {
    if (searchValue.current.value !== "") {
      dispatch(searchCurrency(e.target.value));
    } else {
      dispatch(clearSearch());
    }
  };

  return (
    <>
      {currencyList.loading ? (
        <div className="text-light "> LOADING...</div>
      ) : currencyList.error ? (
        <div>{currencyList.error}</div>
      ) : (
        <>
          <div className="d-flex flex-column text-center justify-content-center flex-md-row justify-content-md-around  p-5 nav__search">
            <div className="text-light">
              <h1>CRYPTO</h1>
            </div>
            <div>
              <div className="container-fluid">
                <form class="d-flex text-center justify-content-center">
                  <input
                    ref={searchValue}
                    type="text"
                    onChange={handleChange}
                    className="search fa fa-search"
                    aria-hidden="true"
                    placeholder=" Search Crypto by Name..."
                  />
                  <div className="text-success">
                    <i
                      class="fas fa-search fa-2x"
                      style={{ paddingLeft: "10px" }}
                    ></i>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <table className="table table-hover table-dark ">
            <thead>
              <tr>
                <th scope="col" className="">
                  Name
                </th>
                <th scope="col">Price</th>
                <th scope="col">Volume</th>
                <th scope="col">Price Change</th>
                <th scope="col">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {currencyList.search
                ? currencyList.search.map((currency) => (
                    <Table currency={currency} props={props} />
                  ))
                : currencyList.currencylist.map((currency) => (
                    <Table currency={currency} props={props} />
                  ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default Coins;
