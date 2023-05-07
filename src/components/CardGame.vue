<template>
  <div v-if="!isShowResult" class="flex align-items-center justify-content-center">
    <Card class="flex align-items-center justify-content-center surface-50 m-5 border-round card">
      <template #title>
        <h2>{{ currentQuestion.text }}</h2>
      </template>
      <template #content>
        <div
          v-for="option in currentQuestion.options"
          :key="option.id"
          class="flex align-items-center answer"
          @click="clickAnswer(option)"
        >
          <span>{{ option.label }} ) </span>

          <RadioButton
            v-model="selectedOption"
            :inputId="String(option.id)"
            name="quiz"
            :value="option.label"
          />

          <label :for="option.id"> {{ option.text }} </label>
        </div>
      </template>
      <template #footer>
        <Button
          @click="sendAnswer"
          label="Send Answer"
          severity="help"
          :disabled="isEnabledButtonSend"
        />
      </template>
    </Card>
  </div>
  <div v-else class="flex align-items-center justify-content-center">
    <Card
      class="flex align-items-center justify-content-center bg-cyan-500 text-white m-5 border-round card"
    >
      <template #title>
        <h1>Result: {{ countCorrectAnswer }} / {{ questions.length }}</h1>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from 'primevue/card'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

import { useRoute } from 'vue-router'
import useQuiz from '../composables/useQuiz'
import { ref, watch } from 'vue'

const route = useRoute()
const { getQuestion, loadQuizes, quiz } = useQuiz()
const questions = ref({})
const currentQuestion = ref({})
const currentOption = ref(0)
const countCorrectAnswer = ref(0)
const isShowResult = ref(false)
const selectedOption = ref([])
const isEnabledButtonSend = ref(true)
loadQuizes()

watch(quiz, () => {
  questions.value = getQuestion(route.params)
  currentQuestion.value = questions.value[0]
})

watch(currentOption, () => {
  currentQuestion.value = questions.value[currentOption.value]
})

watch(currentQuestion, () => {
  selectedOption.value = []
})

const clickAnswer = (answer) => {
  if (answer.isCorrect) {
    countCorrectAnswer.value += 1
  }
  isEnabledButtonSend.value = false
}
const sendAnswer = () => {
  if (currentOption.value >= questions.value.length - 1) {
    isShowResult.value = true
  }
  currentOption.value += 1
   isEnabledButtonSend.value = true
}
</script>

<style scoped>
.card {
  width: 500px;
  height: auto;
  padding: 2rem;
  border-radius: 10px;
}

.answer {
  gap: 10px;
  padding: 3px;
}
</style>
