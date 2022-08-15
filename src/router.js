import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'
import IndexUser from './pages/Users/index.vue'
import Posts from './pages/Posts.vue'
const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/users', name: 'users', component: IndexUser },
    { path: '/posts', name: 'post', component: Posts }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;