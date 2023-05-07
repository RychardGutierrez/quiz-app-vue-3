<template>
  <div class="flex flex-wrap align-items-center justify-content-center">

    <Quiz v-for="quiz in quizes" :key="quiz.id" :quiz="quiz" />

  </div>
</template>

<script setup>
import Quiz from './Quiz.vue';

defineProps({
  quizes: { typeof: Array, require: true }
})

</script>

<style scoped>
.card {
  width: 400px;
  height: 300px;
  padding: 2rem;
  border-radius: 10px;
}
</style>