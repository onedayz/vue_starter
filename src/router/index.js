import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@page/home';
import mainFrame from '@page/frame/mainFrame';
import base      from '@page/playground/base';
import directive from '@page/playground/directive';
import lifecycle from '@page/playground/liftcycle';
import component from '@page/playground/comp';
import store     from '@page/playground/store';
import grid      from '@page/playground/grid';

import NotFound from '@page/notFound';

const index = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/playground', redirect: '/play' },
    { path: '/play', component: mainFrame,
        children: [
            { path: '', redirect: '/play/base'},
            { path: 'base', component: base},
            { path: 'directive', component: directive},
            { path: 'lifecycle', component: lifecycle},
            { path: 'component', component: component},
            { path: 'store', component: store},
            { path: 'grid', component: grid},
        ]
    },
    { path: '/:catchAll(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: index
});

router.beforeEach((to, from, next) => {
    next();
})

export default router