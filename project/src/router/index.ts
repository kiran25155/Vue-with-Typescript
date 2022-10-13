import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import EmpDetails from '../components/EmpDetails.vue'
import sendPost from '../components/sendPost.vue'
import UpdateApplicationStatus from '../components/UpdateApplicationStatus.vue'
import GetPostData from '../components/GetPostData.vue'
import User from '../components/User.vue'
import Notifications from '../components/Notifications.vue'
import TrackMyApplication from '../components/TrackMyApplication.vue'
import PageNotFound from '../components/PageNotFound.vue'
const routes: Array<RouteRecordRaw> = [
 
  {
    path: '/',
    name: 'Home',
    component: Home
     
  },
  {
    path: '/reg',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
       name: 'Login',
    component: Login
  },
  {
    path: '/Emp',
       name: 'EmpDetails',
    component:EmpDetails
  },
  {
    path: '/Emp/createPOST',
    name: 'sendPost',
    component: sendPost
  },
  {
    path: '/updateStatus',
    name: 'UpdateApplicationStatus',
    component:UpdateApplicationStatus
  },
  {
    path: '/Emp/PostsData',
    name: 'GetPostData',
    component:GetPostData
  },
  {
    path: '/user',
    name: 'User',
    component:User
  },
  {
    path: '/notications',
    name: 'Notifications',
    component:Notifications
  },
  {
    path: '/trackMyStatus',
    name: 'TrackMyApplication',
    component:TrackMyApplication
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component:PageNotFound
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes
})

export default router
