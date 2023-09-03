import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import awsExports from "./aws-exports";
import { Amplify } from "aws-amplify";
Amplify.configure(awsExports);

createApp(App).mount("#app");
