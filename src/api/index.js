import quizes from './data.json'

export const getAll = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(quizes)
    }, 300)
  })
