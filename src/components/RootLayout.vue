<template>
  <div class="grid">
    <div
      class="col bg-orange-500 text-white font-bold flex align-items-center justify-content-center text-4xl cursor-pointer"
      style="height: 80px" @click="goToHome">Quiz app</div>
  </div>

  <div class="grid">
    <div class="col">
      <slot />
    </div>
  </div>
</template>

<script setup>
import useQuiz from '../composables/useQuiz';


const { goToHome } = useQuiz();

</script>

<style lang="scss" scoped></style>