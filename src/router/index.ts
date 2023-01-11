import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MapView from "../views/MapView.vue";
import AboutView from "../views/AboutView.vue";
import QuoteView from "@/views/QuoteView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/map",
      name: "map",
      component: MapView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/quote",
      name: "quote",
      component: QuoteView,
    },
  ],
});

export default router;
