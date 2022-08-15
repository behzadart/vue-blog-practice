import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'
import IndexUser from './pages/Users/index.vue'
import ShowUser from './pages/Users/Show.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    {
        path: '/users',
        name: 'users',
        component: IndexUser,
        children: [{ path: ':id', name: 'userID', component: ShowUser }]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;