import Home from '@page/home';
import Content from '@page/content';
import NotFound from '@page/notFound';

const router_main = [
        { path: "/", redirect: '/home' },
        { path: "/home", component: Home },
        { path: "/content", component: Content },
        { path: "/:catchAll(.*)", component: NotFound },
]

export default router_main