import React from "react"
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet"
import nightwind from "nightwind/helper"
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
      <Helmet>
        <script>{nightwind.init()}</script>
      </Helmet>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  )
