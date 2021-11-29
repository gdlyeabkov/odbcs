import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import Register from '../views/Register.vue'
import GetStarted from '../views/GetStarted.vue'
import Projects from '../views/Projects.vue'
import ProjectCreator from '../views/ProjectCreator.vue'
import Cluster from '../views/Cluster.vue'
import ClusterRegister from '../views/ClusterRegister.vue'
import Project from '../views/Project.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/getstarted',
    name: 'GetStarted',
    component: GetStarted
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/create',
    name: 'ProjectCreator',
    component: ProjectCreator
  },
  {
    path: '/cluster',
    name: 'Cluster',
    component: Cluster
  },
  {
    path: '/clusters/register',
    name: 'ClusterRegister',
    component: ClusterRegister
  },
  {
    path: '/project',
    name: 'Project',
    component: Project
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
