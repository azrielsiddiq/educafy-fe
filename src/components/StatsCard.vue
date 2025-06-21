<template>
  <div class="bg-white shadow rounded-xl w-full hover:-translate-y-1 transition duration-200 flex justify-between overflow-hidden dark:bg-slate-900">
    <div class="flex items-center gap-4 px-6 py-4">
      <div :class="[
        'p-2 rounded-lg',
        color === 'blue' && 'bg-blue-100 text-blue-500',
        color === 'green' && 'bg-green-100 text-green-500',
        color === 'yellow' && 'bg-yellow-100 text-yellow-500',
        color === 'red' && 'bg-red-100 text-red-500',
        color === 'purple' && 'bg-purple-100 text-purple-500'
      ]">
        <component :is="icon" class="w-6 h-6" />
      </div>
      <div class="flex flex-col">
        <span class="text-xs lg:text-sm text-slate-400 font-medium">{{ label }}</span>
        <span class="text-xl lg:text-2xl font-semibold text-slate-700 dark:text-slate-300">{{ value }}</span>
      </div>
    </div>
    <div class="w-2 h-full" 
    :class="[
        color === 'blue' && 'bg-blue-500 ',
        color === 'green' && 'bg-green-500',
        color === 'yellow' && 'bg-yellow-500',
        color === 'red' && 'bg-red-500',
        color === 'purple' && 'bg-purple-500'
      ]"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
  icon: Object,
  color: {
    type: String,
    default: 'blue' 
  }
})
</script>
