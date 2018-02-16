import dva from "dva";
import "./index.css";
import { browserHistory } from "dva/router";

// 1. Initialize
const options = {
  initialState: {
    products: [
      {
        name: "dva",
        id: 1
      },
      {
        name: "antd",
        id: 2
      }
    ]
  },
  onError(e, dispatch) {
    console.log(e.message);
    console.log(e.stack);
  },
  history: browserHistory
};
const app = dva(options);

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/products").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
