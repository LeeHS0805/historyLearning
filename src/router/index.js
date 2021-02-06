import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../views/Main";
import FirstScreen from "../views/FirstScreen";
import Nav from "../views/Nav";
import History from "../views/Item/History";
import Video from "../views/Item/Video";
import Learn from "../views/Item/Learn";
import Item from "../views/Item";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/main',
    },
    {
        path: '/main',
        name: 'main',
        component: Main,
        redirect: '/firstScreen',
        children: [
            {
                path: '/firstScreen',
                component: FirstScreen
            },
            {
                path: '/nav',
                component: Nav
            },
            {
                path: '/item',
                component: Item,
                children: [
                    {
                        path: '/history',
                        component: History
                    },
                    {
                        path: '/video',
                        component: Video
                    },
                    {
                        path: '/learn',
                        component: Learn
                    }
                ]
            }
        ]
    }


]

const router = new VueRouter({
    routes
})

export default router
