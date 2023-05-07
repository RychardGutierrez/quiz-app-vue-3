<template>
  <div>

    <h2>{{ currentQuestion.text }}</h2>
    <p v-for=" option in currentQuestion.options">{{ option.label }} {{ option.text }}</p>
  </div>
</template>

<script setup>

import { useRoute } from 'vue-router'
import useQuiz from '../composables/useQuiz';
import { ref, watch } from 'vue';
const route = useRoute();
const { getQuestion, loadQuizes, quiz } = useQuiz();
const currentQuestion = ref({})
loadQuizes();


watch(quiz, () => {
  currentQuestion.value = getQuestion(route.params)[2];
})


</script>

<style lang="css" scoped></style>