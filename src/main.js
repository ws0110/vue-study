import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins/mixins";
import store from "./store/store";

const app = createApp(App).use(router).mixin(mixins).use(store);

// Custom Directive,  <input type="text" v-focus />
app.directive("focus", {
  mounted(el) {
    console.log("custom directive!!");
    el.focus();
  },
});

// Plugins
import i18nPlugin from "./plugins/i18n";

const i18nString = {
  en: {
    hi: "hello",
  },
  ko: {
    hi: "안녕",
  },
};
app.use(i18nPlugin, i18nString);

app.mount("#app");

window.Kakao.init("a0d88b952f3da806548aa4e35d61e8e1"); // 사용하려는 앱의 JavaScript 키 입력
