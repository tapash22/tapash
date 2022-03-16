import { createRouter, createWebHistory } from "vue-router";
import About from "./pages/About.vue";
import Service from "./pages/Services.vue";
import Client from "./pages/Clients.vue";

const routes = [
    {path:'/about',component:About },
    {path:'/services',component: Service },
    {path:'/clients',component: Client },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;