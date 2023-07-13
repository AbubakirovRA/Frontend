import Vue from 'vue';
import VueRouter from 'vue-router';
import Homepage from './components/HomepageComponent.vue';
import Project from './components/ProjectComponent.vue';
import ProjectDetails from './components/ProjectDetails.vue';
import Blog from './components/BlogComponent.vue';
import BlogDetails from './components/BlogDetails.vue';
import NotFound from './components/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Homepage },
    { path: '/project', component: Project },
    { path: '/project-details', component: ProjectDetails },
    { path: '/blog', component: Blog },
    { path: '/blog-details', component: BlogDetails },
    { path: '*', component: NotFound }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
