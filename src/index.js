import { createApp } from "vue";
import App from "./App.vue";
import mainRouter from "./routing";

const app = createApp(App);
app.use(mainRouter);
app.mount("#app");

