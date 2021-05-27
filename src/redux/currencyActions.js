import {
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_SUCCESS,
  CURRENCY_LIST_FAIL,
  CURRENCY_DETAILS_REQUEST,
  CURRENCY_DETAILS_SUCCESS,
  CURRENCY_DETAILS_FAIL,
  CURRENCY_DATA_REQUEST,
  CURRENCY_DATA_SUCCESS,
  CURRENCY_DATA_CLEAR,
  CURRENCY_DATA_FAIL,
  SEARCH_CURRENCY,
  CLEAR_SEARCH,
} from "./types";
import axios from "axios";

export const listCurrency = () => async (dispatch) => {
  dispatch({
    type: CURRENCY_LIST_REQUEST,
  });
  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=25&page=1&sparkline=false"
    );
    dispatch({ type: CURRENCY_LIST_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: CURRENCY_LIST_FAIL, payload: err.response.data });
  }
};

export const detailsCurrency = (currencyId) => async (dispatch) => {
  dispatch({ type: CURRENCY_DETAILS_REQUEST });
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${currencyId}/market_chart?vs_currency=inr&days=50&interval=daily`
    );
    dispatch({ type: CURRENCY_DETAILS_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: CURRENCY_DETAILS_FAIL,
      payload: err.data,
    });
  }
};

export const dataCurrency = (currencyId) => async (dispatch) => {
  dispatch({ type: CURRENCY_DATA_REQUEST });
  try {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${currencyId}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    dispatch({ type: CURRENCY_DATA_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: CURRENCY_DATA_FAIL,
      payload: err.response.data,
    });
  }
};

export const clearDataCurrency = () => async (dispatch) => {
  dispatch({ type: CURRENCY_DATA_CLEAR });
};

export const searchCurrency = (currencyName) => (dispatch) => {
  dispatch({
    type: SEARCH_CURRENCY,
    payload: currencyName,
  });
};
export const clearSearch = () => (dispatch) => {
  dispatch({
    type: CLEAR_SEARCH,
  });
};
