import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/Admin/Index.vue'
import DashboardAdmin from '../views/Admin/Dashboard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/admin',
            name: 'Admin',
            redirect: { path: '/admin/dashboard'},  
            component: Admin,
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