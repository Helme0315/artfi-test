import { Router } from 'express';
import { Route } from './route';

const router = Router();

const routes = [
    {
        path: '/mint',
        route: Route.router,
    },
];

routes.forEach((route) => {
    router.use(route.path, route.route);
});

export default router;
