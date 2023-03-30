import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CargarContenido from '../components/CargarContenido.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cargar",
    name: "cargar-contenido",
    component: CargarContenido,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
