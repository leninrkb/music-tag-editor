import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import '@picocss/pico';
const globalvar = {
    data() {
        return {
            theme:'dark'
        }
    },
}
const app = createApp(App).use(router);
app.mixin(globalvar);
app.mount('#app');