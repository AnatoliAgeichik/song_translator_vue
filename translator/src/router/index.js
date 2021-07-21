import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/singers",
            name: "Singers",
            component: () => import("@/pages/singersPages/SingersPage")
        },
        {
            path: "/singers/:id",
            name: "Singer",
            component: () => import("@/pages/singersPages/DetailPage"),
            props: true
        }

    ]
});
