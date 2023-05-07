<template>
  <div class="flex p-5">
    <span class="p-input-icon-left">
      <i class="pi pi-search" />
      <InputText v-model="textQuery" @input="searchQuiz" placeholder="Search Quiz" />
    </span>
  </div>


  <!-- <input v-model="textQuery" @input="searchQuiz" type="text" /> -->

  <ListQuizes :quizes="resultSearchQuiz" />
</template>

<script setup>
import InputText from 'primevue/inputtext';
import ListQuizes from '../components/ListQuizes.vue';
import useQuiz from '../composables/useQuiz';

const { loadQuizes, resultSearchQuiz, searchQuiz, textQuery } = useQuiz();

loadQuizes();

</script>
