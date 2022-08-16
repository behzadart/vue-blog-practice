import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue'

import IndexUser from './pages/Users/index.vue'
import ShowUser from './pages/Users/Show.vue'
import TemplateUser from './pages/Users/TemplateUser.vue'

import IndexPost from './pages/Posts/index.vue'
import ShowPost from './pages/Posts/Show.vue'
import TemplatePost from './pages/Posts/TemplatePost.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    {
        path: '/users',
        name: 'users',
        component: TemplateUser,
        children: [
            { path: '', name: 'users', component: IndexUser },
            { path: ':id', name: 'userId', component: ShowUser }
        ]
    },


    {
        path: '/posts',
        name: 'posts',
        component: TemplatePost,
        children: [
            { path: '', name: 'post', component: IndexPost },
            { path: ':id', name: 'postId', component: ShowPost }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;