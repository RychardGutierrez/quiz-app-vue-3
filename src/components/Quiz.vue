<template>
  <div class="card">
    <Card @click="chooseQuiz(quiz)" class="cursor-pointer">
      <template #title> {{ quiz.name }}</template>
      <template #content>
        <img :src="quiz.img" :alt="quiz.name" class="image" />
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
import useQuiz from '../composables/useQuiz';

defineProps({
  quiz: { typeof: Object, require: true },
})


const { chooseQuiz } = useQuiz();

</script>

<style scoped>
.card {
  width: 400px;
  height: 300px;
  padding: 2rem;
  border-radius: 10px;
}

.image {
  width: 300px;
}
</style>