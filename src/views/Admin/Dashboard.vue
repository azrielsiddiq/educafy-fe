<template>
    <h1 class="text-xl lg:text-2xl font-medium dark:text-white">Dashboard</h1>
    <div class="w-full flex flex-col 2xl:flex-row gap-4">
        <div class="w-full">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
                <StatsCard label="Total Students" :value="40" :icon="Users" color="blue" />
                <StatsCard label="Total Teachers" :value="10" :icon="UsersRound" color="green" />
                <StatsCard label="Total Classes" :value="2" :icon="Shapes" color="yellow" />
                <StatsCard label="Total Subjects" :value="8" :icon="Library" color="red" />
            </div>
            <div class="bg-white dark:bg-slate-900 w-full h-max mt-4 rounded-xl shadow p-4">
                <div class="flex gap-4">
                    <img src="https://img.freepik.com/free-photo/business-woman-checkered-jacket-with-smile-while-sitting-desk-her-office_197531-10661.jpg?semt=ais_hybrid&w=740" alt="pfp" class="w-11 h-11 rounded-full object-cover">
                    <form action="" class="flex flex-col w-full">
                        <textarea name="" id="" class="w-full h-24 outline-none dark:placeholder:text-slate-300 dark:text-white" placeholder="Create New Announcement"></textarea>
                        <div class="flex justify-between mt-3">
                            <div class="flex gap-4 lg:gap-8">
                                <button class="flex items-center gap-2 text-slate-500 dark:text-slate-200">
                                    <Image></Image>
                                    <span>Image</span>
                                </button>
                                <button class="flex items-center gap-2 text-slate-500 dark:text-slate-200">
                                    <Video></Video>
                                    <span>Video</span>
                                </button>
                            </div>
                            <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400 hover:duration-150">Post</button>
                        </div>
                    </form>
                </div>
            </div>
            <h2 class="text-lg mt-8 dark:text-white">Newest Announcement</h2>
            <div class="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4">
                <div v-for="item in 3" :key="item" class="bg-white dark:bg-slate-900 w-full h-max shadow rounded-xl px-4 py-2">
                    <div class="flex gap-3">
                        <img src="https://img.freepik.com/free-photo/business-woman-checkered-jacket-with-smile-while-sitting-desk-her-office_197531-10661.jpg?semt=ais_hybrid&w=740" alt="pfp" class="w-11 h-11 rounded-full object-cover">
                        <div class="w-full flex justify-between items-center">
                            <div class="flex flex-col">
                                <span class="dark:text-white">Julie Mott</span>
                                <small class="text-slate-400">Admin</small>
                            </div>
                            <button class="text-slate-500 hover:text-slate-600 dark:text-slate-200 hover:dark:text-slate-300 hover:duration-150">
                                <Ellipsis></Ellipsis>
                            </button>
                        </div>
                    </div>
                    <div class="w-full mt-2 flex flex-col gap-2">
                        <p class="dark:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati rerum, hic nisi deserunt fugit temporibus, dolorum laboriosam culpa tempora dolores minus accusamus atque sapiente?</p>
                        <button class="text-sky-500 w-max hover:text-sky-400 hover:duration-150">see more</button>
                        <img src="https://img.freepik.com/free-photo/japan-background-digital-art_23-2151546198.jpg?w=360" alt="" class="w-full h-32 object-cover rounded-xl">
                    </div>
                    <div class="w-full flex justify-between mt-2">
                        <small class="text-slate-400">4 hours ago</small>
                        <div class="flex gap-6">
                            <router-link class="flex gap-1 items-center text-slate-500 hover:text-slate-600 dark:text-white dark:hover:text-slate-300 hover:duration-150">
                                <MessageCircle></MessageCircle>
                                <span>6</span>
                            </router-link>
                            <button class="flex gap-1 items-center text-slate-500 hover:text-slate-600 dark:text-white dark:hover:text-slate-300 hover:duration-150">
                                <Heart></Heart>
                                <span>2</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full 2xl:w-1/3 mt-8 2xl:mt-4">
            <div class="bg-white dark:bg-slate-900 w-full h-max rounded-xl shadow p-4">
                <div class="flex justify-between">
                    <div class="flex items-center gap-3">
                        <div class="bg-slate-100 dark:bg-slate-800 dark:text-white w-11 h-11 rounded-full grid place-content-center">
                            <UsersRound></UsersRound>
                        </div>
                        <span class="font-medium dark:text-white">Admin</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="bg-slate-100 dark:bg-slate-800 dark:text-white w-max h-11 rounded-full flex items-center justify-center px-8 gap-1">
                            <span>5</span>
                            <span>/</span>
                            <span>10</span>
                        </div>
                    </div>
                </div>
                <table class="mt-4 w-full">
                    <thead class="text-slate-500 dark:text-slate-200">
                        <th class="font-light text-start">People</th>
                        <th class="font-light text-start">Clock In</th>
                        <th class="font-light text-end">Status</th>
                    </thead>
                    <tbody>
                        <tr v-for="admin in 5" :key="admin" class="border-t-8 border-white dark:border-slate-900 dark:text-white">
                            <td class="flex items-center gap-2">
                                <img src="https://img.freepik.com/free-photo/business-woman-checkered-jacket-with-smile-while-sitting-desk-her-office_197531-10661.jpg?semt=ais_hybrid&w=740" alt="pfp" class="w-11 h-11 rounded-full object-cover">
                                <span>Julie Mott</span>
                            </td>
                            <td>9.30</td>
                            <td>
                                <div class="bg-teal-500 ml-auto w-4 h-4 rounded-full"></div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-end w-full mt-2">
                    <img v-for="admin in 5" src="https://img.freepik.com/free-photo/business-woman-checkered-jacket-with-smile-while-sitting-desk-her-office_197531-10661.jpg?semt=ais_hybrid&w=740" alt="pfp" class="w-11 h-11 rounded-full object-cover">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import StatsCard from '../../components/StatsCard.vue'
import { Users, UsersRound, Shapes, Library, Image, Video, Ellipsis, MessageCircle, Heart } from 'lucide-vue-next'

</script>