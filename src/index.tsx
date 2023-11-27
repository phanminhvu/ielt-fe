import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "theme/createEmotionCache";
import { QueryClientProvider, QueryClient } from "react-query";

import i18n from "i18n";
import store from "redux/store";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./web.config";

const cache = createEmotionCache();
const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <QueryClientProvider client={client}>
      <I18nextProvider i18n={i18n}>
        <CacheProvider value={cache}>
          <Provider store={store}>
            <App />
          </Provider>
        </CacheProvider>
      </I18nextProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
