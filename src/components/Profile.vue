<template>
  <div
      class="mx-4 w-xl sm:max-w-xl md:max-w-xl lg:max-w-xl xl:max-w-xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-12 bg-dark shadow-xl rounded-lg text-white border-2 border-primary">
    <div class="rounded-t-lg h-32 overflow-hidden">
      <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1610438250910-01cb769c1334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' alt='Computer'>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-primary rounded-full overflow-hidden">
      <img class="object-cover object-center h-32"
           src='https://avatars.githubusercontent.com/u/26382911?v=4' alt='My avatar'>
    </div>
    <div class="text-center mt-2 text-lg text-white">
      <h2 class="font-semibold">Vivvi</h2>
      <p class="font-semibold">Developpeuse FrontEnd</p>
    </div>
    <div class="p-4 border-t border-primary mx-4 mt-2">
      <ProfileLink v-for="link in links" :name="link.label" :link="link.adress" />
    </div>
  </div>
</template>

<script setup>
import ProfileLink from './ProfileLink.vue'

const links = [
  { label: 'Portfolio', adress: 'https://vvachet.netlify.app/' },
  // { label: 'Vuejs en 105 questions', adress: 'https://vvachet.notion.site/fc0788f805474f41bf1e9a0e05c7096d?v=0094735cf57d4cfca92fdafad62deccf&pvs=4' },
  { label: 'Lecture 2023', adress: 'https://vvachet.notion.site/d09f8e72112f4a96a470a59b62e8df99?v=7398e98f15014e5090c65e01e1c8e461&pvs=4' },
  { label: 'Github', adress: 'https://github.com/VachetVirginie'},
  { label: 'LinkedIn', adress: 'https://www.linkedin.com/in/vachetvirginie/'},
  { label: 'Twitter', adress: 'https://twitter.com/VirginieVachet'},
]
</script>
