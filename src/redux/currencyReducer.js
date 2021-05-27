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

export const CurrencyList = (
  state = {
    currencylist: [],
    loading: false,
    error: null,
    search: null,
  },
  action
) => {
  switch (action.type) {
    case CURRENCY_LIST_REQUEST:
      return { ...state, loading: true };
    case CURRENCY_LIST_SUCCESS:
      return { ...state, loading: false, currencylist: action.payload };
    case CURRENCY_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SEARCH_CURRENCY:
      const reg = new RegExp(`${action.payload}`, "gi");
      return {
        ...state,
        search: state.currencylist.filter((currency) =>
          currency.name.match(reg)
        ),
      };

    case CLEAR_SEARCH:
      return { ...state, search: null };
    default:
      return state;
  }
};

export const CurrencyDetails = (
  state = { currency: [], loading: true },
  action
) => {
  switch (action.type) {
    case CURRENCY_DETAILS_REQUEST:
      return { loading: true };
    case CURRENCY_DETAILS_SUCCESS:
      const data = action.payload;
      const priceArr = [];
      const priceLabelArr = [];
      //var myDate = new Date(1622104829 * 1000);
      data.prices.map((price) => {
        priceArr.push(price[1]);
        priceLabelArr.push(new Date(price[0]));
      });

      return {
        ...state,
        loading: false,
        currency: priceArr,
        currencyLabel: priceLabelArr,
      };
    case CURRENCY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const CurrencyData = (
  state = { currencydata: {}, loading: true, error: false },
  action
) => {
  switch (action.type) {
    case CURRENCY_DATA_REQUEST:
      return { ...state, loading: true };
    case CURRENCY_DATA_SUCCESS:
      return { ...state, loading: false, currencydata: action.payload[0] };
    case CURRENCY_DATA_CLEAR:
      return { ...state, currencydata: {} };
    case CURRENCY_DATA_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
