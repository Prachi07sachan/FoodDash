import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

//This `index.js` is the React app’s entry point that mounts the `<App />` component to the DOM, wrapping it with Redux’s `<Provider>` for state management and `<PersistGate>` to persist state across reloads. It also enables strict mode checks for better debugging during development.
