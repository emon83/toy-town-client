import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProviders from "./providers/AuthProviders";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProviders>
      <ThemeProvider>
        <React.StrictMode>
          <div className="max-w-[1921px] mx-auto">
            <RouterProvider router={router} />
          </div>
        </React.StrictMode>
      </ThemeProvider>
    </AuthProviders>
  </Provider>
);
