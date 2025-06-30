import { User } from '@renderer/models/User'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({
    name: 'user name',
    age: 5
  })

  return { user }
})
