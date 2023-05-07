import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { getAll } from '../api'

export default function useQuiz() {
  const router = useRouter()

  const quiz = ref([])
  const resultSearchQuiz = ref([])
  const textQuery = ref('')

  const loadQuizes = async () => {
    const result = await getAll()
    quiz.value = result
    searchQuiz()
  }

  const searchQuiz = () => {
    const filter = quiz.value.filter((quiz) => quiz.name.toLowerCase().includes(textQuery.value))

    resultSearchQuiz.value = filter
  }

  const getQuestion = ({ id }) => {
    const result = quiz.value.filter((quiz) => quiz.id === Number(id))

    return result[0]?.questions
  }

  const chooseQuiz = (quiz) => {
    router.push({
      name: 'game',
      params: {
        id: quiz.id
      }
    })
  }

  const goToHome = () => {
    router.push({ name: 'home' })
  }

  return {
    resultSearchQuiz,
    loadQuizes,
    chooseQuiz,
    searchQuiz,
    textQuery,
    goToHome,
    getQuestion,
    quiz
  }
}
