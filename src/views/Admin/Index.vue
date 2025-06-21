<template>
    <div class="flex w-full">
        <aside class="bg-white dark:bg-slate-900 w-[325px] 2xl:w-[375px] min-h-screen hidden lg:block">
            <div class="border-b border-slate-200 dark:border-0 px-4 py-2">
                <h2 class="text-blue-500 text-2xl font-bold">Educafy</h2>
                <small class="text-slate-400">by <span class="font-medium">Republikode</span></small>
            </div>
            <h6 class="px-4 mt-4 font-medium text-slate-400">General</h6>
            <ul class="px-4 py-3 flex flex-col gap-4">
                <li v-for="menu in menus" :key="menu.name">
                    <router-link
                        :to="menu.url"
                        class="flex items-center px-4 py-2 rounded-lg gap-4 hover:duration-150"
                        :class="{
                            'bg-blue-500 text-white hover:bg-blue-400': route.path === menu.url,
                            'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700': route.path !== menu.url
                        }"
                    >
                        <component :is="menu.icon"></component>
                        <span>{{ menu.name }}</span>
                    </router-link>
                </li>
            </ul>
        </aside>
        <div class="flex flex-col w-full">
            <nav class="bg-white dark:bg-slate-900 w-full h-14 lg:h-[72px] flex justify-between items-center px-4">
                <button @click="toggleSidebar" class="text-slate-500 hover:text-slate-600 hover:duration-150 lg:hidden">
                    <Menu :size="32"></Menu>
                </button>
                <form class="bg-slate-100 dark:bg-slate-800 w-1/3 px-4 py-2 rounded-lg hidden lg:flex items-center gap-3">
                    <Search class="text-slate-500 dark:text-slate-300"></Search>
                    <input type="text" placeholder="Search" class="w-full outline-none dark:placeholder:text-slate-300 dark:text-white">
                </form>
                <div class="flex gap-3 items-center">
                    <button class="text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-400 hover:duration-150 lg:hidden">
                        <Search></Search>
                    </button>
                    <router-link class="text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-400 hover:duration-150">
                        <Bell></Bell>
                    </router-link>
                    <div class="text-slate-500 dark:text-slate-300">|</div>
                    <div class="flex items-center gap-2">
                        <img src="https://img.freepik.com/free-photo/business-woman-checkered-jacket-with-smile-while-sitting-desk-her-office_197531-10661.jpg?semt=ais_hybrid&w=740" alt="pfp" class="w-11 h-11 rounded-full object-cover">
                        <div class="hidden lg:flex flex-col">
                            <span class="dark:text-white">Julie Mott</span>
                            <small class="text-slate-400">Admin</small>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="p-4 2xl:p-8">
                <router-view></router-view>
            </div>
        </div>
    </div>

    <div v-if="isSidebarOpen" @click.self="toggleSidebar" class="bg-black/25 fixed top-0 w-full min-h-screen flex items-start gap-2">
        <aside class="bg-white w-2/3 min-h-screen">
            <div class="border-b border-slate-200 px-4 py-2">
                <h2 class="text-blue-500 text-2xl font-bold">Educafy</h2>
                <small class="text-slate-400">by <span class="font-medium">Republikode</span></small>
            </div>
            <ul class="px-4 py-3 flex flex-col gap-4">
                <li v-for="menu in menus" :key="menu.name">
                    <router-link
                        :to="menu.url"
                        class="flex items-center px-4 py-2 rounded-lg gap-4 hover:duration-150"
                        :class="{
                            'bg-blue-500 text-white hover:bg-blue-400': route.path === menu.url,
                            'text-slate-700 hover:bg-slate-100': route.path !== menu.url
                        }"
                    >
                        <component :is="menu.icon"></component>
                        <span>{{ menu.name }}</span>
                    </router-link>
                </li>
            </ul>
        </aside>
        <button @click="toggleSidebar" class="mt-4 bg-white rounded-full w-8 h-8 grid place-content-center">
            <X></X>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { 
    Menu, 
    Bell, 
    Search,
    Gauge,
    Users,
    UsersRound,
    Library,
    Shapes,
    Shield,
    X
} from 'lucide-vue-next'

const route = useRoute()

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const menus = [
    { name: "Dashboard", icon: Gauge, url: "/admin/dashboard" },
    { name: "Students", icon: Users, url: "/admin/students" },
    { name: "Teachers", icon: UsersRound, url: "/admin/teachers" },
    { name: "Class", icon: Shapes, url: "/admin/class" },
    { name: "Subjects", icon: Library, url: "/admin/subjects" },
    { name: "Admins", icon: Shield, url: "/admin/admins" },
]

</script>