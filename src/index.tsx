import dva from "dva";
import "./index.less";
import models from "./models";
import a from "./models/a";
import router from "./router";

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
models.forEach(m => {
  app.model(m.default); // ts 导出格式包含default
});

// 4. Router
app.router(router);

// 5. Start
app.start("#root");
