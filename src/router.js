import { createRouter, createWebHistory } from "vue-router";

import NotFoundPage from "./pages/NotFound.vue";
import Hero from "./pages/Hero.vue";
import Explore from "./pages/Explore.vue";
import Editor from "./pages/Editor.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import FirstSetup from "./pages/FirstSetup.vue";
import Projects from "./pages/Projects.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import Notifications from "./pages/Notifications.vue";
import Profile from "./pages/Profile.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Hero, name: "Home" },
    { path: "/explore", component: Explore, name: "Explore" },
    { path: "/editor/:projectId", component: Editor },
    { path: "/login", component: Login, name: "Login" },
    { path: "/register", component: Register, name: "Register" },
    { path: "/firstSetup", component: FirstSetup },
    { path: "/projects", component: Projects, name: "Projects" },
    {
      path: "/project/:projectId",
      component: ProjectPage,
      name: "Project Page",
    },
    { path: "/notifications", component: Notifications, name: "Notifications" },
    { path: "/profile/:userId", component: Profile, name: "Profile" },
    { path: "/:pathMatch(.*)*", component: NotFoundPage, name: "Not Found" },
  ],
});
