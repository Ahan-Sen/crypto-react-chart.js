import { createStore, combineReducers, applyMiddleware } from "redux";
import { CurrencyList, CurrencyDetails, CurrencyData } from "./currencyReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      currencyList: CurrencyList,
      currencyDetails: CurrencyDetails,
      currencyData: CurrencyData,
    }),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );

  return store;
};
