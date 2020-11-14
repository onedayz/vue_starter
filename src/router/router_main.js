import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@page/home';
import Content from '@page/content';
import mainFrame from '@page/frame/mainFrame';
import Intro from '@page/intro';
import BackEnd from '@page/backEnd';
import FrontEnd from '@page/frontEnd';
import RouterExample from '@page/router/routerExample';
import NotFound from '@page/notFound';

const router_main = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/content', component: Content },
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
    routes: router_main
});

router.beforeEach((to,from,next) => {
    console.log(from.path + ' -> ' + to.path);
    next();
})

export default router