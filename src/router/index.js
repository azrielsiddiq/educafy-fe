import { createRouter, createWebHistory } from 'vue-router'
import DashboardAdmin from '../views/Admin/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin/dashboard',
            name: 'Admin',
            redirect: { path: '/admin/dashboard'},  
            component: DashboardAdmin,
            children: [
                {
                    path: '/admin/dashboard',
                    name: 'Dashboard Admin',
                    component: DashboardAdmin
                }
            ]
        }   
    ]
})

export default router