<template>
    <div @click='openLink' class="relative cursor-pointer m-4">
      <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-primary rounded-lg"></span>
      <div class="relative p-2 bg-white border-2 border-primary rounded-lg hover:scale-105 transition duration-500">
        <div class="text-center">
          <h3 class="my-2 ml-3 text-lg font-bold text-gray-800">{{ name }}</h3>
        </div>
      </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  name: String,
  link: String,
})
const openLink = () => {
  window.open(props.link, '_blank')
}
</script>
