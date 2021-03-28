import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@page/home';
import Content from '@page/content';
import mainFrame from '@page/frame/mainFrame';
import Intro from '@page/intro';
import BackEnd from '@page/backEnd';
import FrontEnd from '@page/frontEnd';
import RouterExample from '@page/router/routerExample';
import NotFound from '@page/notFound';

import Empty from '@page/playground/empty';
import Empty2 from '@page/playground/empty2';
import Empty3 from '@page/playground/empty3';

const index = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/content', component: Content },
    { path: '/empty', component: Empty },
    { path: '/empty2', component: Empty2 },
    { path: '/empty3', component: Empty3 },
    { path: '/main', component: mainFrame,
        children: [
            { path: '', redirect: '/main/intro'},
            { path: 'intro', component: Intro},
            { path: 'front', component: FrontEnd},
            { path: 'back', component: BackEnd},
        ]
    },
    { path: '/router/:userId', component: RouterExample },
    { path: '/:catchAll(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: index
});

router.beforeEach((to, from, next) => {
    console.log(from.path + ' -> ' + to.path);
    next();
})

export default router