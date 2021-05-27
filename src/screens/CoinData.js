import React, { useEffect } from "react";
import { detailsCurrency, dataCurrency } from "../redux/currencyActions";
import { useDispatch, useSelector } from "react-redux";
import Graph from "../components/Graph";
import CoinDetail from "../components/CoinDetail";
import { Link } from "react-router-dom";

function CoinData(props) {
  const currencyId = props.match.params.id;
  const dispatch = useDispatch();
  const currencyDetails = useSelector((state) => state.currencyDetails);
  const currencyData = useSelector((state) => state.currencyData);
  useEffect(() => {
    dispatch(dataCurrency(currencyId));
    dispatch(detailsCurrency(currencyId));
  }, []);

  return (
    <>
      {currencyDetails.loading ? (
        <div className="text-light ">Loading...</div>
      ) : currencyDetails.error ? (
        <div>{currencyDetails.error}</div>
      ) : (
        <>
          <div className="nav__data p-2">
            <div className="text-light">
              <h6>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  back
                </Link>
              </h6>
            </div>
          </div>
          <div className="d-flex justify-content-center text-center mt-5">
            <CoinDetail currencyData={currencyData} />
          </div>
          <div className="d-flex justify-content-center text-center ">
            <Graph
              currencyArr={currencyDetails.currency}
              currencyLabelArr={currencyDetails.currencyLabel}
            />
          </div>
        </>
      )}
    </>
  );
}

export default CoinData;
