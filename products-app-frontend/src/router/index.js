import { createRouter, createWebHistory } from "vue-router";
import EditScreen from "../views/EditScreen.vue";
import HomeScreen from "../views/HomeScreen.vue";

const routes = [
  {
    path: "/produse",
    name: "home",
    component: HomeScreen,
  },
  {
    path: "/produse",
    name: "Edit",
    component: EditScreen,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
