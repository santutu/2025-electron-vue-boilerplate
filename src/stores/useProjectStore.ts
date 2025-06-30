import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Project } from '../models/Project'

export const useProjectStore = defineStore('project', () => {

    const project = ref(new Project())

    return {
        project
    }
})
