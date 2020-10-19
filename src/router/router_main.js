import Home from '@page/home';
import Content from '@page/content';
import mainFrame from '@page/frame/mainFrame';
import Intro from '@page/intro';
import BackEnd from '@page/backEnd';
import FrontEnd from '@page/frontEnd';
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
        { path: '/:catchAll(.*)', component: NotFound },
]

export default router_main